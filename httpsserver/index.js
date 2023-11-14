const http=require("http")
const fs= require("fs")
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("home")
    }
    else if(req.url=="/about"){
        res.end("about")
    }
    else if(req.url=="/contactus"){
        res.end("contact")
    }
    else if(req.url=="/offers"){
        res.end("offers")
    }
    else if(req.url=="/userapi"){
        // res.end("user api")
        fs.readFile(`${__dirname}/userapi/userapi.json`,"utf-8",(err,data)=>{
            console.log(data)
            // const obj=JSON.parse(data);
            // res.end(obj[0].squadName)
            res.end(data)
        })
    }
    else{
        res.writeHead(404)
        res.end("404 bad gateway")
        res.end("hi")
    }
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("listened")
})