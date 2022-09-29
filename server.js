const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require("dotenv").config({ path: "Config/.env" })
const connection = require('./Connection/database')
const userroute = require('./Routes/user.route')
connection.connect()
app.use('/api/user', userroute)
const port = process.env.PORT
app.listen(port)
module.exports = app