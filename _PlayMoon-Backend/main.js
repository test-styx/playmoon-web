var express = require("express")
var app = express()

var dotenv = require("dotenv").config({
    path: "environment/.env"
})
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var cors = require("cors")({
    origin: "*"
})

app.use(cors)
app.use(bodyParser("t"))
app.use(cookieParser("t"))

var PORT = process.env.PORT | 5000

app.listen(PORT, () => console.log(`--Backend running on port: ${PORT}--`))