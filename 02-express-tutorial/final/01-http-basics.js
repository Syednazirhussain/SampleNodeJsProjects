const http = require('http')
const { readFileSync } = require('fs')

const home = readFileSync('./../navbar-app/index.html', 'utf-8')
const styles = readFileSync('./../navbar-app/styles.css', 'utf-8')
const logo = readFileSync('./../navbar-app/logo.svg', 'utf-8')
const logic = readFileSync('./../navbar-app/browser-app.js', 'utf-8')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(home)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // style
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(styles)
    res.end()
  }
  // style
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(logo)
    res.end()
  }
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(logic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Page Not Found<h1>')
    res.end()
  }
})

server.listen(5000)
