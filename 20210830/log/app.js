const express=require('express'); // Prisidedam biblioteka
const fs = require('fs');
const app=express(); // sukuriam objekta

let date = new Date().toISOString().slice(0,10);



app.use((req,res,next)=>{
    fs.appendFileSync('log.txt','New User: '+req.socket.remoteAddress+"\n"+'Date: '+date+"\n"+'Url: '+req.url+"\n");
    next(); // permes toliau i kita middleware pagal url kuris bus kvieciamas
    
});
app.use('/result',(req,res,next)=>{
    res.send("<h1>Result page</h1>");
    
});
app.use('/', (req,res,next)=>{
    res.send("<h1>Main page</h1>");
    
});

app.listen(3000);

