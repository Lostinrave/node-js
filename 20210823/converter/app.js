const converter=require('./converter');

const http=require('http'); //Prisidedame HTTP moduli
const fs=require('fs');     //Prisidedame FS moduli
const path=require('path'); //Prisidedam path moduli

const server=http.createServer((req, res)=>{
    let url=req.url;

    if(url==='/'){
        let stream=fs.readFileSync('./template/index.html');
        res.setHeader('Content-Type','text/html');
        res.write(stream);
        return res.end();
    }


    let getData = url.split('?');
    if(getData[0]==='/convert'){

     // /forecast?place=Kaunas
        let rates = getData[1].split('&'),
            from = rates[0].split('=')[1].toUpperCase(),
            to = rates[1].split('=')[1].toUpperCase();

        converter(from,to,(data)=>{
            res.setHeader('Content-Type', 'text/html');
            let s='<table class="table">';
            data.forEach((d)=>{
                s+='<tr> <td>'+d.date+'</td> <td>'+d.value+'</td> </tr>'
            });
            s+='</table>';
            let stream=fs.readFileSync('./template/convert.html', 'utf-8');
            stream=stream.replace('{{from}}', from);
            stream=stream.replace('{{to}}', to);
            stream=stream.replace('{{rates}}', s);
            res.write(stream);
            res.end();
        });
    }
});

server.listen(3000, 'localhost');

// converter('EUR','USD',(data)=>{
//     data.forEach((d) => { // forEach yra metodas kuris iškvietinės funkciją kiekvienam masyvo elememtui
//         console.log("Day: "+d.date+"\t Rates:"+d.value);
//     });
// });

