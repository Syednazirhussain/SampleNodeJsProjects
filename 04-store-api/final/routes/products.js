const express = require('express')
const router = express.Router()

const {
  getAllProducts,
  storeProduct,
  findProduct,
  updateProduct,
  removeProduct,
  getAllProductsStatic,
} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/').post(storeProduct)
router.route('/:Id').get(findProduct)
router.route('/:Id').put(updateProduct)
router.route('/:Id').delete(removeProduct)
router.route('/static').get(getAllProductsStatic)

module.exports = router
