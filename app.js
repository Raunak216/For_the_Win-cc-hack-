const express=require("express");
const app=express();
const path=require("path");
const ejsMate=require("ejs-mate");
const mongoose=require("mongoose");
const methodOverride = require('method-override');

// const Schema=mongoose.Schema;
// const passport=require("passport");
// const LocalStrategy=require("passport-local");
// const User=require("./models/users.js");
const item=require("./models/items.js");

const MONGO_URL="mongodb://127.0.0.1:27017/rarematch";
async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});
const userRouter=require("./routes/user.js");
app.set("views engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));

// app.use("/", userRouter);

app.listen(8080,()=>{
console.log("app is listening")}
);
app.get("/items/main",async(req,res)=>{
    res.render("./items/landingPage.ejs");
})
app.get("/items/login",async(req,res)=>{
    res.render("./items/login.ejs");
})

//checkout route
app.get("/items/checkout",async(req,res)=>{
    res.render("./items/checkout.ejs")
})

//index route
app.get("/items",async(req,res)=>{
    const allitems =await item.find({});
    res.render("./items/swipePage.ejs");
    
})
//create route
app.get("/items/new",(req,res)=>{
    res.render("./items/newitems.ejs");
});

//update route ->1:edit , 2:update
app.get("/items/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const showitem =await item.findById(id);
    console.log(showitem);
    res.render("./items/edit.ejs",{showitem})
})

app.put("/items/:id",async(req,res)=>{
    let{id}=req.params;
    await item.findByIdAndUpdate(id,{...req.body.listing});
    //root
    res.redirect("/items")
})


app.post("/items",async(req,res)=>{
    const newitem=new item(req.body.listing);
   await newitem.save();
    console.log(newitem);
    res.redirect("/items")
})

//delete route
app.delete("/items/:id",async(req,res)=>{
    let{id}=req.params;
    await item.findByIdAndDelete(id);
    res.redirect("/items")
    });





//show route
app.get("/items/:id",async(req,res)=>{
    let {id}=req.params;
    const showitem =await item.findById(id);
    res.render("items/show.ejs",{showitem});
    
})
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.aunthenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());