const request = require('postman-request'); // http and https calls module



const converter=(from, to, callback)=>{
    // datos kintamieji turi būti virš 'const url', nes kitaip vykdoma asinchroniniu būdu ir kintamieji start ir end tampa undefined
    let end = new Date().toISOString().slice(0,10);
    // new Date().toISOString() - 2021-08-24T15:20:28.499Z, todėl reikia splicint iki 10 
    let start = new Date();
    start.setDate(start.getDate()-10); 
    // paimam 10 dienų datą atgal su -10
    start=start.toISOString().slice(0,10);
    // analogiškai splicinam iki 10 characterių
    const url='https://api.frankfurter.app/'+start+'..'+end+'?from='+from+'&to='+to;
    // sudedam kintamuosius į API linką

    request({url:url}, (error, response)=>{ // postman-request funkcija
        if(response!=null && response.statusCode===200){
            // const data=response.body; // gauname stringą
            // const crn=JSON.parse(data); // JSON.parse stringa paverčiam i objektą
            // console.log(crn.rates);
            const crn=JSON.parse(response.body); // sutrumpinta kodo versija, sumažinam vienu kintamuoju
            const rates=[]; // masyvas į kurį dėsime objektus
            // let i=0; imant 10 dienų
            for(const [date, value] of Object.entries(crn.rates)){ // Object.entries paverčia objektą į masyvą su keys ir values // for of ciklas yra praktiškai for each
                // for(const [date, value] of (Object.entries(crn.rates)).reverse()){} imant 10 dienų
                // i++; imant 10 imant 10 dienų
                // if(i>10) break; imant 10 dienų
                rates.push({
                    date: date,
                    value: value[to] // paimame atributą kurį esame apsirašę kaip kintamąjį, kurį įrašome kviesdami funkciją pvz 'USD', 'RUB', ir t.t
                });

            }
            callback(rates); // Iškviečiame funkciją kuri buvo paduota kaip atributas
            // callback(rates.reverse); imant 10 dienų 
        }else{
            callback([]);
        }
    });
};

const currenciesList=(callback)=>{
    //API url'as
    const url='https://api.frankfurter.app/currencies';
    request({url:url},(error,response)=>{
        // const data=response.body; // mazinam eiluciu ir kintamuju kieki
        const list=JSON.parse(response.body);
        const l=[];
        for(const [code, name] of Object.entries(list)){ 
            // tas pats kaip for each - kuris naudojamas masyvams, for of naudojamas objektams
            l.push({
                code: code,
                name: name
            });
        }
        console.log(l);
        callback(l);
    });

};


module.exports={converter,currenciesList};

// currenciesList((ca)=>{}); // Tikrinimuisi funkcijos ja reikia kviesti taip