const forecast=require('./forecast');

forecast('kaunas', (data)=>{
    console.log("Temperature forecast: ");
    data.forEach((d) => {
        console.log("Day: "+d.time+"\t Temperature:"+d.temp);
    });
});

let end = new Date().toISOString().slice(0,10);
let start = new Date();
start.setDate(start.getDate()-10);
start=start.toISOString().slice(0,10)
console.log(start);
console.log(end);