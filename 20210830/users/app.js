const express=require('express'); // Prisidedam biblioteka
const systemRouter=require('./routes/system');
const pageRouter=require('./routes/page');
const userRouter=require('./routes/user');
const app=express(); // sukuriam objekta

app.use(express.urlencoded({extended:false})); // body-parser issplitina inputo stringa i objekta, kad galetume pasiimti inputo reiksme
app.use(systemRouter);
app.use(pageRouter);
app.use(userRouter);





app.listen(3000);

