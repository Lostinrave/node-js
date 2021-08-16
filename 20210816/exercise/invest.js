//atskiras modulis su funkcija, atskiras modulis html atvaizdavimui, forma su trim inputais: pradine pinigu suma, palukanos ir metai kiek bus laikomas indelis banke
//Found function on a web:
// const  invest=(inv,int,per)=>{
//     var x=(1+int/100)
//     var invest=inv*(Math.pow(x,per))
//     return invest;
// }

//Function using loop:
const invest= (inv, int, per) => {
    let x=(int/100);
    let invest=inv;
    for (let i=1; i<=per; i++){

        invest+=invest*x;
    }
    return invest;
}

module.exports=invest;