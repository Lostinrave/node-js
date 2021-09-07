// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient;
// const ObjectId=mongodb.ObjectId;
const {MongoClient,ObjectId}=require('mongodb');

//Duomenu bazes vieta (serveris), siuo atveju localhost ip adresas + portas
const connectionURL='mongodb://127.0.0.1:27017'; 
//Duomenu bazes pavadinimas
const dbName='users';

MongoClient.connect(connectionURL, (error,client)=>{
    if(error){
        return console.log("Unable to connect!");
    }
    console.log("Connected to database");
    //Jungiames prie duomenu bazes (jei tokios nera, ja sukurs)
    const db=client.db(dbName);
    //Vartotojo pridejimas i duomenu baze
    // db.collection('names').insertOne({
    //     name:'Jonas',
    //     lastname:'Jonaitis',
    //     salary:1200
    // },(error,result)=>{
    //     if(error){
    //        return console.log('not inserted');
    //     }
    //     console.log('Inserted');
    // });

    //Paimkime viena irasa 
    // db.collection('names').findOne({
    //     _id: new ObjectId('6137a81c25074fb44aff9a3b') //Id turi buti perkoduotas
    // },(error,user)=>{
    //     if(error){
    //         return console.log('An error occured while getting data');
    //     }
    //     console.log(user);
    // });

    //Paimkime visus kolekcijos dokumentus
    // db.collection('names').find({
    //     name:'Gediminas'
    // }).toArray((error,users)=>{
    //     if (error){
    //         return console.log("Unable to get data");
    //     }
    //     console.log(users);
    // });

    //Suzinoti kiek yra gediminu
    db.collection('names').find({
            name:'Gediminas'
        }).count((error,count)=>{
            if (error){
                return console.log("Unable to get data");
            }
            console.log('Gediminas: '+count);
        });
});