const express=require('express');
const router=express.Router();
const Feedback=require('../model/feedback');

router.get('/feedback', (req, res, next)=>{
    Feedback.find({}).then((feedbacks) =>{
        res.send(feedbacks);
    }).catch((e)=>{
        res.status(500).send(e);
    })
});

router.get('/feedback/:id', (req,res, next)=>{
    //Paimame id iš URL
    //Jei url butų localhost:3000/feedback/2d3d12231d4   , tuomet id = 2d3d12231d4
    const id=req.params.id;
    Feedback.findById(id).then((feedback)=>{
        if (!feedback){
            return res.status(404).send();
        }
        res.send(feedback);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});


router.post('/feedback', (req, res, next)=>{
    const feedback=new Feedback(req.body);
    feedback.save().then(()=>{
        res.status(201).send(feedback);
    }).catch((e)=>{
        res.status(400).send(e);
    });
})

router.patch('/feedback/:id', async (req, res, next)=>{
    try{
        //Pasiimame sena feedback is duomenu bazes
        const feedback=await Feedback.findById(req.params.id);
        //Is atsiusto JSON failo paiimame atsiustu atnaujinti lauku sarasa (masyva)
        const updates=Object.keys(req.body);
        //Laukai kuriuos galime pakeisti
        const allowed=['name','email','text'];
        //Ar visi atsiusti laukai is masyvo updates yra allowed masyve
        if(!updates.every((update)=>allowed.includes(update))){
            //Jei ne nutraukiame vykdyma ir graziname klaida 400
            return res.status(400).send({error:"Neteisingi atnaujinimo laukai"});
        }
        //Einame per visus atnaujinamus laukus
        updates.forEach((update)=>{
            //Sename irase pekeiciame lauku reiksmes naujomis
            //Rasome feedback[update], kai norime ideti kintamaji parametro vietoje
            feedback[update]=req.body[update];
        });
        //Issaugome nauja irasa i duomenu baze
        await feedback.save();
        //Issiunciame nauja irasa
        res.send(feedback);
    }catch(error){
        res.status(400).send(error);
    }

});

router.delete('/feedback/:id', async (req, res, next)=>{
    try{
       const feedback=await Feedback.findByIdAndDelete(req.params.id);
       if(!feedback){
           return res.status(404).send({error:"Irasas nerastas"});
       }
       return res.send(feedback);
    }catch(error){
        res.status(500).send(error);
    }
});
module.exports=router;