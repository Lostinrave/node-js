const express=require('express');

const router=express.Router();

router.get('/', (req, res, next)=>{
    db.collection('taskmanager').find({}).toArray().then((taskmanager)=>{
        res.render('index',{
            taskmanager:taskmanager
        });
    }).catch((error)=>{
        console.log('An error has occured');
    });

});

router.get('/new', (req, res, next)=>{
    res.render('new');
});

router.post('/new', (req, res, next)=>{
    db.collection('taskmanager').insertOne(req.body).then(()=>{
        res.redirect('/');
    });
    
});

module.exports=router;