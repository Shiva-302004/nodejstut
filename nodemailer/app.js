const express=require("express")
const {sendmail}=require("./controllers/sendmail")
const app=express();
app.get("/",(req,res)=>{
    res.send("hi")
})
app.get("/sendemail",sendmail)
app.listen(8000,()=>{
    console.log("listened")
})