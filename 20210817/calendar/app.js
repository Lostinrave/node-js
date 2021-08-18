const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    let file='./public'+url;

    if(fs.existsSync(file) && fs.lstatSync(file).isFile()){
        let stream = fs.readFileSync(file, 'utf-8');
        res.setHeader('Content-Type', 'text/css');
        res.write(stream);
        return res.end();
    }

});

server.listen(3068,'localhost');
