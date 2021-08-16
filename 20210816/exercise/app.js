const http=require('http');
const investHtml=require('./investHtml');
const server=http.createServer((req, res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/investment' && method=='POST'){
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const d=Buffer.concat(body).toString();
            console.log(d);
            const v=d.split('&');
            const x=parseFloat(v[0].split('=')[1]);
            const y=parseFloat(v[1].split('=')[1]);
            const z=parseFloat(v[2].split('=')[1]);

            res.setHeader('Content-Type', 'text/html');
            res.write(investHtml.result(x,y,z));
            return res.end();
        });
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write(investHtml.index());
        res.end();
    }

});

server.listen(3065, 'localhost');