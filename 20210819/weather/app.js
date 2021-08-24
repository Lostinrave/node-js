const forecast=require('./forecast');
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
    if(getData[0]==='/forecast'){

     // /forecast?place=Kaunas

        let place = getData[1].split('=')[1];

        forecast(place,(temp)=>{
            res.setHeader('Content-Type', 'text/html');
            let s='<table class="table">';
            temp.forEach((d)=>{
                s+='<tr> <td>'+d.time+'</td> <td>'+d.temp+'</td> </tr>'
            });
            s+='</table>';
            let stream=fs.readFileSync('./template/temp.html', 'utf-8');
            stream=stream.replace('{{place}}', place);
            stream=stream.replace('{{temperature}}', s);
            res.write(stream);
            res.end();
        });
    }
});

server.listen(3000, 'localhost');


// forecast('kaunas', (data)=>{
//     console.log("Temperature forecast: ");
//     data.forEach((d) => {
//         console.log("Day: "+d.time+"\t Temperature:"+d.temp);
//     });
// });

