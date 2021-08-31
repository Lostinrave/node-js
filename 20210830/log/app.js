const express=require('express'); // Prisidedam biblioteka
const app=express(); // sukuriam objekta
const pageRouter=require('./routes/page');
const logRouter=require('./routes/log');


app.use(express.urlencoded({extended:false}));
app.use(logRouter);
app.use(pageRouter);



app.listen(3000);

