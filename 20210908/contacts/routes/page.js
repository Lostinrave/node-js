const express=require('express');
const {ObjectId}=require('mongodb');

const router=express.Router();

//Atvaizduojame pagrindinį puslapį (lentelę)
router.get('/', async (req, res, next)=>{
  //Paimame įrašus iš duomenų bazės  
  const contacts=await db.collection('contacts').find({}).toArray();
  const types=await db.collection('type').find({}).toArray();

  res.render('index',{contacts:contacts, types:types});
});
//Atvaizduojame formą naujo įrašo pridėjimui
router.get('/new', async (req, res, next)=>{
    const types=await db.collection('type').find({}).toArray();
    res.render('new',{
      types:types
    });
});
//Vykdome naujo įrašo pridėjimą
router.post('/new', (req, res, next)=>{
    //Idedame įrašus į duomenų bazę
    db.collection('contacts').insertOne(req.body).then((result)=>{
        res.redirect('/');
    });
    
});

//Atvaizduojame redagavimo formą, id gauname per GET ir paimame vartotojo duomenis
router.get('/edit', async (req, res, next)=>{
  //Paimame duomenis apie kontakta
  const contact=await db.collection('contacts').findOne({
    _id:new ObjectId(req.query.id)
  });
  //Paimame kontaktų tipus
  const types=await db.collection('type').find({}).toArray();
  //Viską atvaizduojame
  res.render('edit', {
    contact:contact,
    types:types
  });
});

//Vyksta įrašo atnaujinimas, id paduodamas per GET kintamąjį, įrašai per POST
router.post('/edit', async (req, res, next)=>{
  db.collection('contacts').updateOne({
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
   db.collection('contacts').deleteOne({
      _id:new ObjectId(req.query.id)
   });
   res.redirect('/');
});


module.exports=router;