const express=require('express');
const fs = require('fs');
const router=express.Router(); // sukuriam objekta router
let date = new Date().toISOString().slice(0,10);


router.use((req,res,next)=>{
    fs.appendFileSync('log.txt','New User: '+req.socket.remoteAddress+"\n"+'Date: '+date+"\n"+'Url: '+req.url+"\n");
    next(); // permes toliau i kita middleware pagal url kuris bus kvieciamas
    
});

module.exports=router;