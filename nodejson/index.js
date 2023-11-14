const http=require("http")

const my_obj={
    name:"shiva",
    title:"verma",
    roll:"2202068",
    course:"ee"
}
console.log(my_obj.name)
console.log(my_obj.roll)
const server=http.createServer((req,res)=>{

    const data=JSON.stringify(my_obj)
    // const shiva=my_obj.name
    const obj=JSON.parse(data)
    res.end(data +obj)
    // res.end(obj)
    
})
server.listen(3001,"127.0.0.1",()=>{
    console.log("listed")
})