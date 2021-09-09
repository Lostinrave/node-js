// C:\mongo\mongodb\bin\mongod.exe --dbpath='C:\mongo\data'
const express=require('express');
const hbs=require('hbs');
const {MongoClient, ObjectId}=require('mongodb');
const path=require('path');
const pageRoute=require('./routes/page');

//Konstantos 
const viewsPath=path.join(__dirname,'views','templates');
const partialsPath=path.join(__dirname,'views','partials');
const publicPath=path.join(__dirname,'public');
const dbName='taskmanager';
const connectionURL='mongodb://127.0.0.1:27017';

//Objektų susikurimas
const app=express();

//Konfiguracija
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Middleware / Route registracija
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(pageRoute);
MongoClient.connect(connectionURL).then((client) =>{
    const db=client.db(dbName);
    global.db=db;
    console.log("Connected to database");

});
app.listen(3000);