const fs= require('fs')
// fs.writeFileSync("shiva.txt","hi shiva")
// fs.appendFileSync("shiva.txt","  hi bete moj kardi")
// const shiva=fs.readFileSync("shiva.txt","utf-8")
// console.log(shiva)
// console.log(shiva.toString())
// fs.renameSync("shiva.txt","myshiva.txt")
// fs.rmdirSync("nodepractice")
// fs.mkdirSync("shiva1")
// fs.rmdirSync("shiva1")
// fs.writeFile("shiva.pdf","hi bete",(err)=>{
//     console.log(err);

// })
fs.readFile("shiva.pdf","utf-8",(err,data)=>{
    console.log(data)
})

fs.open("shiva.pdf",'w',(err)=>{
    console.log(err)
})
