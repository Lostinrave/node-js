const express=require('express'); // Prisidedam biblioteka
const path=require('path');
const hbs=require('hbs'); // template engine

const pageRouter=require('./routes/page');
const logRouter=require('./routes/log');


const viewsPath=path.join(__dirname,'views','templates');
const partialsPath=path.join(__dirname,'views','partials');
const publicPath=path.join(__dirname,'public');

const app=express(); // sukuriam objekta

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath)); //registruojam express.static middleware kuris pagal uzklausas atsius failus is katalogo kuri mes nurodeme kaip kintamaji
app.use(logRouter);
app.use(pageRouter);



app.listen(3000);

