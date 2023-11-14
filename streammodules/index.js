const fs=require("fs")
const http=require("http")

const server=http.createServer()

server.on('request',(req,res)=>{

    //ist method 


    // fs.readFile("shiva.txt","utf-8",(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.end(data)
    //     }

    // })

    //2nd method

    const rstream=fs.createReadStream("shiva.txt")
    rstream.on('data',(chunkdata)=>{
            res.write(chunkdata)
    })
    rstream.on('end',()=>{
        res.end();
    })
    rstream.on('error',(err)=>{
        console.log(err)
        // res.write(err)
        res.end("err")
    })

    //3rd method

    // rstream.pipe(res)

})
server.listen(400,"127.0.0.1",()=>{
    console.log("listened")
})