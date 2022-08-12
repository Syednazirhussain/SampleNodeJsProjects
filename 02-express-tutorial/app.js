const express = require('express')

const { products } = require('./data')
const { logger } = require('./logger')
const { authorize } = require('./authorize')

// Search Hacker News API (https://hn.algolia.com/api)
const app = express()

// Globally add middleware
// app.use(logger)

// Middleware for route patterns
// app.use('/api', logger)

// Add multiple middlewares
// app.use([ authorize, logger ])

// Middleware for specific routes
// app.get('/', logger, (req, res) => {
//     res.send("Home Page")
// })

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})


app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

// Add multiple middleware to single route
app.get('/api/items', [ authorize, logger ], (req, res) => {
    console.log(req.user);
    res.send('<h1>Items</h1>');
})

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
})

app.get('/api/product/:Id', (req, res) => {

    // URL parameters req.params.<key>
    // QUERY parameters req.query.<key>

    const product = products.find(x => x.id == req.params.Id)
    res.status(200).json(product)
})




app.listen(5000, () => {
    console.log("Server Port: 5000");
})

/*
const path = require('path')

const app = express()

app.use(express.static('./public'))

app.listen(5000, () => {
    console.log('server is listen on port 5000');
})


// app.get('/', (req, res) => {

//     let filePath = path.resolve(__dirname, './navbar-app/index.html')
//     res.sendFile(filePath)
//     // res.status(200).send('<h1>Home Page</h1>');
// })


app.all("*", (req, res) => {
    res.status(404).send('<h1>Resource Not Found...</h1>')
})
*/



