require('dotenv').config()

const express = require('express')
const cors = require('cors')
const PORT = Number(process.env.PORT)
const connectDB = require('./db/connectDb')

const app = express()

// view engine
app.set('view engine', 'pug')
app.set('views', './view')

// static declaration
app.use(express.static('./view'))

// body parser middleware
app.use(express.urlencoded({ extended: true })) // query format of incoming data
app.use(express.json()) // receive json format data

// import router module
app.use(`/`, require('./route/contactViewRoute'))
app.use(`/api/contact`, require('./route/contactRoute'))

// default route
app.all('*', (req,res) => {
    res.status(404).json({ msg: `Requested path not found, try /api/users`})
})

// server listen
app.listen(PORT,async () => {
    connectDB()
    console.log(`server is running @ http://localhost:${PORT}`)
})


/* 
   npm init -y => to install package.json
   npm i --save express => install express
   npm i --save express dotenv cors mongoose => to install dependendies(modules)
   npm run dev => to run in development mode
*/
