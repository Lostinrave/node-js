const express=require('express');
const {ObjectId}=require('mongodb');
const router=express.Router();

router.get('/', async (req, res, next)=>{
    const task=await db.collection('taskmanager').find({}).toArray();
        res.render('index',{
            taskmanager:task
        });
    });



router.get('/new', async (req, res, next)=>{
    const status=await db.collection('status').find({}).toArray();
    res.render('new',{
        status:status
    });
});

router.post('/new', (req, res, next)=>{
    db.collection('taskmanager').insertOne(req.body).then(()=>{
        res.redirect('/');
    });
    
});

router.get('/edit', async (req, res, next)=>{
    //Paimame duomenis apie kontakta
    const task=await db.collection('taskmanager').findOne({
      _id:new ObjectId(req.query.id)
    });
    //Paimame kontaktų tipus
    const status=await db.collection('status').find({}).toArray();
    //Viską atvaizduojame
    res.render('edit', {
      task:task,
      status:status
    });
  });
  
  //Vyksta įrašo atnaujinimas, id paduodamas per GET kintamąjį, įrašai per POST
  router.post('/edit', async (req, res, next)=>{
    db.collection('taskmanager').updateOne({
      _id:new ObjectId(req.query.id)
    },{
      //$set - atlieka įrašų pakeitimą 
      //req.body yra pilnas objektas su visais atributais, todėl į set mes jį visą tiesai ir siunčiam
      $set:req.body
    });
    res.redirect('/');
  });
  
  //Vyksta įrašo trynimas, id paduodamas per get kintamąjį
  router.get('/delete', (req,res, next)=>{
     db.collection('taskmanager').deleteOne({
        _id:new ObjectId(req.query.id)
     });
     res.redirect('/');
  });

module.exports=router;