const express=require("express")
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")
const app=express()
var items=["Buy Food","Cook Food","Eat Food"]

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    let day=date()
    res.render("list",{kindOfDay:day,newListItems:items})
})

app.post("/",(req,res)=>{
    var item=req.body.newItem
    items.push(item)
    res.redirect("/")
})
app.listen(3000,()=>{
    console.log("server is on port 3000");
})