const express = require('express')
const app = express()

app.get('/', (request,response)=>{
    response.send("welcome to my home page")
})

app.get('/products', (request,response)=>{
    response.send('<h1>Here are your products</h1>')
})

app.listen(5000, ()=>{
    console.log("server is started on port 5000.....")
})