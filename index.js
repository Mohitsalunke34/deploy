const express = require('express')
require('dotenv').config();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req,res) =>{
    res.send("welcome to insta page")
})

app.get('/login' ,(req,res) =>{
    res.send(`<h1>welcome to login page </h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})