const request = require('postman-request');

let end = new Date().toISOString().slice(0,10);
let start = new Date();
start.setDate(start.getDate()-10);
start=start.toISOString().slice(0,10);

const converter=(from, to, callback)=>{

    const url='https://api.frankfurter.app/'+start+'..'+end+'?from='+from+'&to='+to;

    request({url:url}, (error, response)=>{
        const data=response.body;
        const crn=JSON.parse(data);
        // console.log(crn.rates);
        let ct=[];


        for(const [date, value] of Object.entries(crn.rates)){
            ct.push({
                date: date,
                value: value.USD
            });

        }
        callback(ct);
    });
};
module.exports=converter;

