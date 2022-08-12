const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');

  res.status(200).json({ products, nbHits: products.length });
};

const storeProduct = async (req, res) => {

  let newProduct = {
    name: "Dell Inspiron 3000 series",
    price: 115000,
    featured: false,
    rating: 5.0,
    company: "marcos",
  }

  const product = await Product.create(newProduct)
  res.status(201).json({ product })
}

const findProduct = async (req, res) => {

  const productId = req.params.Id

  const product = await Product.findOne({ _id: productId })
  if (product) {
    return res.status(200).json(product)
  }

  return res.status(404).json({ "error": 1, "message": "Product not found." })
}

const updateProduct = async (req, res) => {

  const { Id: productId } = req.params

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: false,
    runValidators: true
  })

  res.status(200).json(product)
}

const removeProduct = async (req, res) => {

  const { Id: productId } = req.params

  await Product.findByIdAndDelete({ _id: productId })

  res.status(200).json({ "error": 0, "message": "Product deleted successfully" })
}


const getAllProducts = async (req, res) => {

  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log("queryObject", queryObject);

  let result = Product.find(queryObject);
  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  // 23
  // 4 7 7 7 2

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  storeProduct,
  findProduct,
  updateProduct,
  removeProduct,
  getAllProductsStatic,
};
