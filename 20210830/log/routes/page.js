const express=require('express');
const router=express.Router(); // sukuriam objekta router
const calculate = require('../calc');


router.get('/', (req,res,next)=>{
    res.send("<h1>Calculation of LCM page</h1></br><form action='/result' method='POST'><input type='number' name='n1'></br><input type='number' name='n2'><button type='submit'>Calculate</button></form>");
    
});

router.post('/result',(req,res,next)=>{
    // console.log(req.body);
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    res.send(`<h1>Result of LCM page</h1></br>First number: ${n1}</br>Second number: ${n2}</br>LCM: ${calculate(n1,n2)}`);
    
});

router.get('/result', (req,res,next)=>{
    res.redirect('/');
});



module.exports=router;
