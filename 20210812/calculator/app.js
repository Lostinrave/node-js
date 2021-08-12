const http=require('http');

const server=http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/result' && method==='POST'){
        console.log('calculating');
        const body=[];
        req.on('data', (chunk)=>{//looking for a seperate  chunk of data
            body.push(chunk);
            console.log("Recieved chunk: "+chunk);
        });
        req.on('end', ()=>{
            let bs=Buffer.concat(body).toString();//getting full body data/check node.js docs
            console.log("Recieved full information: "+bs);
            let x=bs.split('=')[1];
                resp.setHeader('Content-Type', 'text/html');
                resp.write('<html>');
                resp.write('<head>');
                resp.write('<title>Calculator</title>');
                resp.write('<meta charset="utf-8">');
                resp.write('</head>');
                resp.write('<body>');
                resp.write(`Number squared: ${x*x}`)
                resp.write('</body>');
                resp.write('</html>');
                return resp.end();
        });
    }else{
         resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Calculator</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<form action="result" method="post">');//action sets url where data is sent.
    //method: GET, POST - send data
    //GET - sets data on top of url/GET is set by default
    //POST - sends data to request body, data is invisible for user/used for most of forms
    resp.write('<input type="text"name="number">');
    resp.write('<button type="submit">Squared</button>');
    resp.write('</form>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
    }
});


   

server.listen(3063, 'localhost');