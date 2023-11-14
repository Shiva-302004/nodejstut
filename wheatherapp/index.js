// const http=require("http");
// const fs=require("fs");
// const requests=require("requests");

// const  HomeFile=fs.readFileSync("home.html","utf-8");
// const replaceval=(tempval,orival)=>{
//     let temperature=tempval.replace("{%tempval%}",orival.main.temp)
//     temperature=tempval.replace("{tempmin}",orival.main.temp_min)
//     temperature=tempval.replace("{%tempmax%}",orival.main.temp_max)
//     temperature=tempval.replace("{%location%}",orival.name)
//     temperature=tempval.replace("{%country%}",orival.sys.country)
//     return temperature;
// }
// const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         requests("https://api.openweathermap.org/data/2.5/weather?q=gaya&appid=c9f5975205b31ae1e6e7e2ccc8cb5c26")
//         .on("data",(data)=>{
//             const chunkdat=JSON.parse(data);
//             const arraydata=[chunkdat]
//             // console.log(arraydata[0].main.temp)
//             // res.write(chunkdat);
//            const realtimedat= arraydata.map((val)=>replaceval(HomeFile,val)).join("")
//         //    console.log(realtimedat)
//            res.write(realtimedat)
//         })
//         .on("end",()=>{
//             res.end();
//         })
//         .on("error",(err)=>{
//             console.log(err);
//         })
//     }
// })
// server.listen(8000,"127.0.0.1",()=>{
//     "listened"
// })
// require('dotenv').config();
const http = require("http");
const fs = require("fs");
var requests = require("requests");


const homeFile = fs.readFileSync("home.html", "utf-8");


const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{tempmin}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
        "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=c9f5975205b31ae1e6e7e2ccc8cb5c26"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("File not found");
  }
});

server.listen(8000, "127.0.0.1");