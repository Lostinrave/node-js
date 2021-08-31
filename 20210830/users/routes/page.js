const express=require('express');
const router=express.Router(); // sukuriam objekta router

router.get('/',(req,res,next)=>{  
    res.send("<h1>Main page</h1>");
});

module.exports=router;