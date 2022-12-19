const express=require('express')
const app=express()
require('dotenv').config()





//run server
const port=process.env.PORT 

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})