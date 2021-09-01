const express=require('express'); // Prisidedam biblioteka
const pageRouter=require('./routes/page');
const logRouter=require('./routes/log');
const path=require('path');
const app=express(); // sukuriam objekta
app.set('view engine','hbs');


app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public'))); //registruojam express.static middleware kuris pagal uzklausas atsius failus is katalogo kuri mes nurodeme kaip kintamaji
app.use(logRouter);
app.use(pageRouter);



app.listen(3000);

