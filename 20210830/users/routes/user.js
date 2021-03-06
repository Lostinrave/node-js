const express=require('express');
const router=express.Router(); // sukuriam objekta router
const path=require('path');

router.get('/', (req,res,next)=>{
    res.render('user');
    // res.sendFile(path.join(__dirname,'..','views','user.html'));
    
});

router.post('/add',(req,res,next)=>{
    // console.log(req.body);
    //paimamas sablonas ir sugeneruojamas html
    res.render("result",{
        name:req.body.name,
        surname:req.body.surname
    });//paduodam result.hbs be galunes

    // res.send("<h1>Add user</h1>"+"User name: "+req.body.name+"</br>"+"User surname: "+req.body.surname); 
    // pasiimam inputo reiksme kuri nurodyta inputo name=""
    
});

//Jei useris nusikopijavo nuoroda ir atejo per forma POST metodu, o iklijaves get metoda, mes ji redirectinam i users_list url
router.get('/add', (req,res,next)=>{
    res.redirect('/user');
});

module.exports=router;