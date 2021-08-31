const express=require('express'); // Prisidedam biblioteka
const fs = require('fs');
const app=express(); // sukuriam objekta
const calculate = require('./calc');
let date = new Date().toISOString().slice(0,10);

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    fs.appendFileSync('log.txt','New User: '+req.socket.remoteAddress+"\n"+'Date: '+date+"\n"+'Url: '+req.url+"\n");
    next(); // permes toliau i kita middleware pagal url kuris bus kvieciamas
    
});


app.post('/result',(req,res,next)=>{
    // console.log(req.body);
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    res.send(`<h1>Result of LCM page</h1></br>First number: ${n1}</br>Second number: ${n2}</br>LCM: ${calculate(n1,n2)}`);
    
});

app.get('/result', (req,res,next)=>{
    res.redirect('/');
});

app.use('/', (req,res,next)=>{
    res.send("<h1>Calculation of LCM page</h1></br><form action='/result' method='POST'><input type='number' name='n1'></br><input type='number' name='n2'><button type='submit'>Calculate</button></form>");
    
});

app.listen(3000);

