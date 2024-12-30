// import express from 'express'
require('dotenv').config()
const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send("Mrinal.com")
})


app.get("/login", (req, res)=>{
    res.send('<h1>Please Login at Maxter Code</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("WElcome to maxter code")
})
app.listen(process.env.PORt, () => {
  console.log(`Example app listening on port ${port}`)
})


