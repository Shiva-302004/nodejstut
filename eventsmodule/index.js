const EventEmitter=require("events")
const event=new EventEmitter();

event.on("SayMyName",(args1,args2)=>{
    console.log(`hi beta${args1},${args2} bye beta`)

})
event.on("SayMyName",(...args)=>{
    const parameters=args.join(",")
    console.log(`hi beta${parameters}bye beta`)

})
event.on("checkstatuscode",(sc,msg)=>{
    console.log(`${sc} ${msg}`)
})
event.emit("checkstatuscode",200,"ok")
event.emit("SayMyName",3,4,5,6,7)