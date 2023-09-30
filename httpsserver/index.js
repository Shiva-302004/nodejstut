const http=require("http")

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
    else{
        res.writeHead(404)
        res.end("404 bad gateway")
    }
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("listened")
})