const os= require("os")
// data=os.arch()
data=os.freemem()
// data=os.totalmem()
// console.log(data)
console.log(`${data/1024/1024/1024}`)
console.log(os.hostname())
// console.log(data/1024/1024/1024)
console.log(os.homedir())
console.log(os.platform())
console.log(os.type())
console.log(os.tmpdir())
