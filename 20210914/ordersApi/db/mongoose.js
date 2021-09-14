const mongoose=require('mongoose');

const connectionURL='mongodb://127.0.0.1:27017';
const dbName='ordersApi';
//Mongoose naudodamasis mongodb biblioteka jungiasi prie MongoDB
mongoose.connect(connectionURL+'/'+dbName, {
});