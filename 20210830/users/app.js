const express=require('express'); // Prisidedam biblioteka
const path = require('path');
const hbs=require('hbs'); // template engine

//routes
const systemRouter=require('./routes/system');
const pageRouter=require('./routes/page');
const userRouter=require('./routes/user');

//keliai
//konstanta, kelias iki sablonu
const viewsPath=path.join(__dirname,'views','templates');
const partialsPath=path.join(__dirname,'views','partials');
const publicPath=path.join(__dirname,'public');

// sukuriam objekta
const app=express(); 

//nustatymai turi buti pries middleware bet po objekto
//pakeicia globalius nustatymus
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

 // body-parser, issplitina inputo stringa i objekta, kad galetume pasiimti inputo reiksme
app.use(express.urlencoded({extended:false}));
//registruojam express.static middleware kuris pagal uzklausas atsius failus is katalogo kuri mes nurodeme kaip kintamaji
app.use(express.static(publicPath)); 
app.use(systemRouter);
app.use('/user',userRouter);
app.use(pageRouter);


app.listen(3000);

