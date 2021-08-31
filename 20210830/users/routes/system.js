const express=require('express');
const requestIp = require('request-ip');
const router=express.Router(); // sukuriam objekta router


//middleware taikomas visiems logginam atejusius vartotojus
router.use((req,res,next)=>{
    console.log("New user: "+requestIp.getClientIp(req)+"\n"+"Url: "+req.url);
    next();
});

module.exports=router;