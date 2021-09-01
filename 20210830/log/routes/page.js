const express=require('express');
const router=express.Router(); // sukuriam objekta router
const calculate=require('../calc');
const path=require('path');

router.get('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
    
});

router.post('/result',(req,res,next)=>{
    // console.log(req.body);
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    res.send(`<h1>Result of LCM page</h1>First number: ${n1}</br>Second number: ${n2}</br>LCM: ${calculate(n1,n2)}`);
    
});

router.get('/result', (req,res,next)=>{
    res.redirect('/');
});

router.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, '..','views','404.html'));

});



module.exports=router;
