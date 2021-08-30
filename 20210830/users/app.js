const express=require('express'); // Prisidedam biblioteka
const requestIp = require('request-ip');

const app=express(); // sukuriam objekta

app.use(express.urlencoded({extended:false})); // body-parser

app.use((req,res,next)=>{
    console.log("New user: "+requestIp.getClientIp(req)+"\n"+"Url: "+req.url);
    next();
});

app.get('/users_list', (req,res,next)=>{
    res.send("<form action='/add_user' method='POST'><input type='text' name='name'></br><input type='text' name='surname'><button type='submit'>Submit</button></form>");
    
});

app.post('/add_user',(req,res,next)=>{
    // console.log(req.body);
    res.send("<h1>Add user</h1>"+"User name: "+req.body.name+"</br>"+"User name: "+req.body.surname);
    
});

// app.use('/',(req,res,next)=>{  //app.use - GET, POST paima abu metodus
//     res.send("<h1>Main page</h1>");
// });

app.listen(3000);

