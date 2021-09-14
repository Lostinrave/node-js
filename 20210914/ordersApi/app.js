const express=require('express');
require('./db/mongoose');
const servicesRoutes=require('./routes/servicesRoutes');
const ordersRoutes=require('./routes/ordersRoutes');


const app=express();

app.use(express.json())
app.use(servicesRoutes);
app.use(ordersRoutes);

app.listen(3000);