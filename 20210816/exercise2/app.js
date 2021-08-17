const http=require('http');
const fs=require('fs');
const rectangle=require('./rectangle');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(method==='POST'&&url==='/calculate'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            let d=Buffer.concat(body).toString();
            let v=d.split('&');
            let width=parseFloat(v[0].split('=')[1]);
            let length=parseFloat(v[1].split('=')[1]);
            let rec=rectangle(width,length);
            let data=fs.readFileSync('result.html','utf-8');
            data=data.replace("{{result}}", rec);
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

server.listen(3066,'localhost');
