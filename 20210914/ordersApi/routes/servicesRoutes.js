const express=require('express');
const router=express.Router();
const Services=require('../model/services');

router.post('/service', (req, res, next)=>{
    const service=new Services(req.body);
    service.save().then(()=>{
        res.status(201).send(service);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

router.get('/services', (req, res, next)=>{
    Services.find({}).then((services) =>{
        res.send(services);
    }).catch((e)=>{
        res.status(500).send(e);
    })
});

router.get('/service/:id', (req,res, next)=>{
    //Paimame id iš URL
    //Jei url butų localhost:3000/feedback/2d3d12231d4   , tuomet id = 2d3d12231d4
    const id=req.params.id;
    Services.findById(id).then((services)=>{
        if (!services){
            return res.status(404).send();
        }
        res.send(services);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

module.exports=router;