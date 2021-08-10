//common JS 
const user=require('./user'); // vykdomas tik runtime'e 'require' yra kaip atskira JS funkcija

console.log("Sveikas, "+user.getUserName("Jonas","Jonaitis"));