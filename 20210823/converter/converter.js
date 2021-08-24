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
        // const data=response.body; // gauname stringą
        // const crn=JSON.parse(data); // JSON.parse stringa paverčiam i objektą
        // console.log(crn.rates);
        const crn=JSON.parse(response.body); // sutrumpinta kodo versija, sumažinam vienu kintamuoju
        const rates=[]; // masyvas į kurį dėsime objektus

        for(const [date, value] of Object.entries(crn.rates)){ // Object.entries paverčia objektą į masyvą su keys ir values // for of ciklas yra praktiškai for each
            rates.push({
                date: date,
                value: value[to] // paimame atributą kurį esame apsirašę kaip kintamąjį, kurį įrašome kviesdami funkciją pvz 'USD', 'RUB', ir t.t
            });

        }
        callback(rates); // Iškviečiame funkciją kuri buvo paduota kaip atributas
    });
};
module.exports=converter;

