const express=require('express');
const menu=require('./../modules/menu');
const router=express.Router();
const feedback=require('./../modules/feedback');

router.get('/',(req,res,next)=>{
    res.render('index')
});

router.get('/menu', (req,res,next)=>{
    const restoMenu=menu.getMenu();
    res.render('menu',{
        title: 'Restaurant menu',
        menu: restoMenu
    });
});

router.get('/reviews', (req,res,next)=>{
    const fb=feedback.getFeedback();
    res.render('feedback',{
        title: 'Reviews',
        feedback: fb
    });

});

router.post('/reviews', (req,res,next)=>{
    feedback.addFeedback(req.body.name, req.body.text);
    res.redirect('/reviews');
});

router.get('/contacts', (req,res,next)=>{
    res.render('contacts');
});



module.exports=router;