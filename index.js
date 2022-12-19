const express=require('express')
const app=express()
const axios = require('axios')
const cors=require('cors')
require('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.post('/momopayment',async(req,res)=>{
    try {
    //payment endpoint
    const url='https://api.paystack.co/charge'
    //headers
    const config={
        headers:{
            Authorization:`Bearer ${process.env.SECRET}`
        }
    }
    //payload
    const {amount,email,phone}=req.body
    const currency='GHS'
    const mobile_money={
        phone,
        provider: "mtn"
    }
    //response
    await axios.post(url,{amount,currency,email,mobile_money},config)
    .then((res)=>{
       res.json(res.data)
    })
    .catch((err)=>{
     res.json(err)
    })

    } catch (error) {
        console.log(error)
    }
})


//payment with bank a/c


//run server
const port=process.env.PORT 

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})