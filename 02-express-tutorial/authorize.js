const authorize = (req, res, next) => {
    // console.log("authorize");

    const { user } = req.query

    if (user === 'nazir') {
        req.user = { name: 'nazir', id: 1}
        next()
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }

    next()
}

module.exports = { authorize }