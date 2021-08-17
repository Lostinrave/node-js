const http=require('http');
const fs=require('fs');
const primary=require('./primary');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(method==='POST'&&url==='/check'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            let d=Buffer.concat(body).toString();
            // console.log(d);
            let v=d.split('&');
            let number=parseInt(v[0].split('=')[1]);
            let prime=primary(number);
            let data=fs.readFileSync('result.html','utf-8');
            data=data.replace("{{result}}", prime);
            res.setHeader('Content-type', 'text/html');
            res.write(data);
            return res.end();
        });
    }else{

        let data=fs.readFileSync('index.html', 'utf-8');
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end();
    }

});

server.listen(3067,'localhost');
