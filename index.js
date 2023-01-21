require("dotenv").config()
const PORT=process.env.PORT

const express=require("express")
const connect=require("./config/db")
const userRoute=require("./src/user.router")
const investmentRoute=require("./src/investment/investment.router")

const cors=require("cors")

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(cors())




app.use("/users",userRoute)
app.use("/invest",investmentRoute)
app.listen(PORT,async()=>{
    await connect()
    console.log("server is running")
})
