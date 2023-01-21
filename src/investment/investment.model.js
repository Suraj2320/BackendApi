const {Schema,model}=require("mongoose")

const InvestmentSchema=new Schema({
    amount:{
        type:Number,
         required:true,
    },
rate:{
    type:Number,
    required:true
},
year:{
    type:Number,
    required:true
}
},{timestamps:true});

const InvestmentModel=model("invest",InvestmentSchema)
module.exports=InvestmentModel