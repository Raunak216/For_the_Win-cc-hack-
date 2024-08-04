const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const itemSchema=new Schema({
    title:String,
    type:String,
    description:String,
    price:Number,
    image: {url:{
    type: String,
    website_link:String,
    
    }
}
});

const item=mongoose.model("item",itemSchema);
module.exports=item;