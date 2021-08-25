const {converter, currenciesList}=require('./converter');

const http=require('http'); //Prisidedame HTTP moduli
const fs=require('fs');     //Prisidedame FS moduli
const path=require('path'); //Prisidedam path moduli

function generateCurrenciesSelect(currencies){
    // Generuojame select ir ji patalpinsime index.html
    let s='<select class="form-control" name="from">';
    currencies.forEach((d)=>{
        s+="<option value='"+d.code+"'>"+d.name+"</option>";
    })
    s+='</select>'
    return s;
}


const server=http.createServer((req, res)=>{
    let url=req.url;

    if(url==='/'){
        currenciesList((currencies)=>{
            let stream=fs.readFileSync('./template/index.html', 'utf-8');
            stream=stream.replace('{{fromCr}}', generateCurrenciesSelect(currencies));
            stream=stream.replace('{{toCr}}', generateCurrenciesSelect(currencies));
            res.setHeader('Content-Type','text/html');
            res.write(stream);
            return res.end();
        });

    }


    let getData = url.split('?');
    if(getData[0]==='/convert'){

        let rates = getData[1].split('&'),
            from = rates[0].split('=')[1],
            to = rates[1].split('=')[1];

        currenciesList((currencies)=>{
            converter(from,to,(data)=>{
                res.setHeader('Content-Type', 'text/html');
                let s='<table class="table">';
                data.forEach((d)=>{
                    s+='<tr> <td>'+d.date+'</td> <td>'+d.value+'</td> </tr>'
                });
                s+='</table>';
                let stream=fs.readFileSync('./template/convert.html', 'utf-8');
                stream=stream.replace('{{fromCr}}', generateCurrenciesSelect(currencies));
                stream=stream.replace('{{toCr}}', generateCurrenciesSelect(currencies));

                stream=stream.replace('{{from}}', from);
                stream=stream.replace('{{to}}', to);
                stream=stream.replace('{{rates}}', s);
                res.write(stream);
                res.end();
            });
        });
    }
    
});

server.listen(3000, 'localhost');

// converter('EUR','USD',(data)=>{
//     data.forEach((d) => { // forEach yra metodas kuris iškvietinės funkciją kiekvienam masyvo elememtui
//         console.log("Day: "+d.date+"\t Rates:"+d.value);
//     });
// });

