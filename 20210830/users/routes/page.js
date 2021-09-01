const express=require('express');
const router=express.Router(); // sukuriam objekta router
const path=require('path');

router.get('/',(req,res,next)=>{  
    res.send("<h1>Main page</h1>");
});

//middleware kuris aptarnauja bet kokius url ir isveda 404
router.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, '..','views','404.html'));

});


module.exports=router;