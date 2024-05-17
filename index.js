//we could also use import express use import commonly 
const express = require('express')   //created the object of express 
const app = express()  //powerfull variable created using express 
const port = 3000   //on which port we need to listen to 

//how to use .env in the server 
require('dotenv').config()


app.get('/', (req, res) => {    //listen to get request any request that come to / 
  res.send('Hello World!')
})

app.get('/login',(req,res)=>[
    res.send('<h1>Siddhant Jha</h1>')  //now once we added this route now we need to update this code as well in the backend restart the server 
])

app.get('/twitter',(req,res)=>{    //listen to /twitter  slash is import 
    res.send('siddhant')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Siddhant is great</h2>')
})

app.listen(process.env.port, () => {    //keep on listening to the port 
  console.log(`Example app listening on port ${port}`)
})