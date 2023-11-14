const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hi shiva bete moj kardi")
    }
    else if(req.url=="/contact"){
        res.end("hi shiva contact me")
    }
    else if(req.url=="/about"){
        res.end("hi shiva about me")
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error page</h1>")
    }
})
server.listen(400,'127.0.0.1',()=>{
    console.log("listened")
})
