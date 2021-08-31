const express=require('express'); // Prisidedam biblioteka
const systemRouter=require('./routes/system');
const pageRouter=require('./routes/page');
const userRouter=require('./routes/user');
const path = require('path');
const app=express(); // sukuriam objekta

app.use(express.urlencoded({extended:false})); // body-parser issplitina inputo stringa i objekta, kad galetume pasiimti inputo reiksme
app.use(express.static(path.join(__dirname, 'public')));
app.use(systemRouter);
app.use(pageRouter);
app.use('/user',userRouter);





app.listen(3000);

