const http=require('http');
const fs = require('fs');


const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;


    if(url==='/result' && method==='POST'){
        console.log('calculating');
        const body=[];
        req.on('data', (chunk)=>{//looking for a seperate  chunk of data
            body.push(chunk);
            console.log("Recieved chunk of information: "+chunk);
        });
        req.on('end', ()=>{
            let bs=Buffer.concat(body).toString();//getting full body data/check node.js docs
            console.log("Recieved full information: "+bs);
            let x=bs.split('=')[1];
                x = x.replace(/[^a-zA-Z ]/g,' ');
                fs.appendFileSync('text.txt', x+"\n");
                resp.setHeader('Content-Type', 'text/html');
                resp.write('<html>');
                resp.write('<head>');
                resp.write('<title>Transfer to file</title>');
                resp.write('<meta charset="utf-8">');
                resp.write('</head>');
                resp.write('<body>');
                resp.write("Information transfered to file: "+x)
                resp.write('</body>');
                resp.write('</html>');
                return resp.end();
        });
    }else{
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<html>');
        resp.write('<head>');
        resp.write('<title>File transfer</title>');
        resp.write('<meta charset="utf-8">');
        resp.write('</head>');
        resp.write('<body>');
        resp.write('<form action="result" method="post">');//action sets url where data is sent.
        //method: GET, POST - send data
        //GET - sets data on top of url/GET is set by default
        //POST - sends data to request body, data is invisible for user/used for most of forms
        resp.write('<input type="text"name="transfer">');
        resp.write('<button type="submit">Transfer to file</button>');
        resp.write('</form>');
        resp.write('</body>');
        resp.write('</html>');
        resp.end();
    }
});


   

server.listen(3062, 'localhost');