const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const router = require('./router')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port);
console.log('server listening on port', port)