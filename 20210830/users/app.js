const express=require('express'); // Prisidedam biblioteka
const systemRouter=require('./routes/system');
const pageRouter=require('./routes/page');
const userRouter=require('./routes/user');
const path = require('path');
const app=express(); // sukuriam objekta
//nustatymai turi buti pries middleware bet po objekto
app.set('view engine','hbs');

app.use(express.urlencoded({extended:false})); // body-parser, issplitina inputo stringa i objekta, kad galetume pasiimti inputo reiksme
app.use(express.static(path.join(__dirname, 'public'))); //registruojam express.static middleware kuris pagal uzklausas atsius failus is katalogo kuri mes nurodeme kaip kintamaji
app.use(systemRouter);
app.use('/user',userRouter);
app.use(pageRouter);






app.listen(3000);

