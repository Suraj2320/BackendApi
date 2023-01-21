const express=require("express")
const InvestmentModel=require("./investment.model")
const app=express.Router()


app.post("/calculate",async(req,res)=>{
const {amount,rate,year}=req.body
console.log(amount,rate,year)
try{
    
    let p=amount;
    let n=year;
    let i=(rate)/100;
    
    let x=(1+i)**n
  
    let z=(x-1)/i
   
    let f=  p*x
    console.log(f)
    let total=p*n;
    const final=total-f;
    let a=Math.floor(final)
    
    const investment=new InvestmentModel({amount,rate,year,final})
    await investment.save()
    return res.send({a})

}
catch(e){
    console.log(e.message)
    return res.send(e.message)
}
})










module.exports=app;
