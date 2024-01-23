const express = require('express')
const app = express()
app.use(express.json())
const PORT = 1244
const cors = require("cors")

const db = require('./config/db')
const router= require('./router/review')
app.use(cors({origin:"*"}));
app.use(router)



app.listen(PORT, ()=>{
    console.log(`app is listening to ${PORT}`)
})