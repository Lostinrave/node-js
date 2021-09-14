const express=require('express');
const router=express.Router();
const Orders=require('../model/orders');

router.post('/order', (req, res, next)=>{
    const order=new Orders(req.body);
    order.save().then(()=>{
        res.status(201).send(order);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

router.get('/orders', (req, res, next)=>{
    Orders.find({}).then((orders) =>{
        res.send(orders);
    }).catch((e)=>{
        res.status(500).send(e);
    })
});

router.get('/orders/:id', (req,res, next)=>{
    const id=req.params.id;
    Orders.findById(id).then((orders)=>{
        if (!orders){
            return res.status(404).send();
        }
        res.send(orders);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

router.get('/orders/service/:id', (req,res, next)=>{
    const id=req.params.id;
    Orders.find({
        service_id:id
    }).then((orders) =>{
        if (!orders){
            return res.status(404).send();
        }
        res.send(orders);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

module.exports=router;