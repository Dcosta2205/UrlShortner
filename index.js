const express = require('express')
const app = express()
const urlRouter = require('./router/url')
const connectToDB = require('./connection')
const { urlencoded } = require('body-parser')
const PORT = 8001

connectToDB("mongodb://127.0.0.1:27017/url-shortner")
.then(()=> {
    console.log("connected to mongo Db")
})

app.use(express.json())
app.use('/url',urlRouter)

app.listen(PORT, ()=>{
    console.log("Listeneing to request")
})
