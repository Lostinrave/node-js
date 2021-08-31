const express=require('express');
const router=express.Router(); // sukuriam objekta router

router.get('/users_list', (req,res,next)=>{
    res.send("<form action='/add_user' method='POST'><input type='text' name='name'></br><input type='text' name='surname'><button type='submit'>Submit</button></form>");
    
});

router.post('/add_user',(req,res,next)=>{
    // console.log(req.body);
    res.send("<h1>Add user</h1>"+"User name: "+req.body.name+"</br>"+"User surname: "+req.body.surname); // pasiimam inputo reiksme kuri nurodyta inputo name=""
    
});

//Jei useris nusikopijavo nuoroda ir atejo per forma POST metodu, o iklijaves get metoda, mes ji redirectinam i users_list url
router.get('/add_user', (req,res,next)=>{
    res.redirect('/users_list');
});

module.exports=router;