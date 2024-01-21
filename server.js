const express = require('express')
const app = express()
app.use(express.json())
const PORT = 1244

const db = require('./config/db')
const router= require('./router/review')
app.use(router)



app.listen(PORT, ()=>{
    console.log(`app is listening to ${PORT}`)
})