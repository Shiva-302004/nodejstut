const fs= require('fs')
fs.writeFileSync("shiva.pdf","hi shiva")
// fs.writeFileSync("shiva.pdf"," verma")
fs.appendFileSync("shiva.pdf","hi shiva verma")
const buffer=fs.readFileSync("shiva.pdf")
console.log(buffer);
const originaldata=buffer.toString();
console.log(originaldata)
fs.renameSync("shiva.pdf","shiva1.pdf")