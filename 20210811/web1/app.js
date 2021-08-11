const http=require('http');



const server = http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;
    let daugiklis;
    if(url==='/'){
        daugiklis=2;
    }else{
        daugiklis=parseInt(url.split("/")[1]);
        // skaldome i masyva, split grazina teksta, naudojame parseInt, kad grazintu skaiciu
    }
    console.log("Ivyko ivykis");
    console.log(url);
    console.log(method);

    resp.setHeader('Content-Type', 'text/html');
    resp.write("<html>");
    resp.write("<head><title>Webpage</title></head>");
    resp.write("<body>");
    resp.write("<h1>Daugybos lentele</h1>");
    for(let i=1; i<=10; i++){
        resp.write(`<a href="/${i}">${i}</a>  `);
    }

    resp.write("<table>");
    for(let x=1; x<=10;x++){
        resp.write("<tr>");
        resp.write(`<td>${daugiklis}</td>`);
        resp.write("<td>*</td>");
        resp.write(`<td>${x}</td>`);
        resp.write("<td>=</td>");
        resp.write(`<td>${x*daugiklis}</td>`);
        resp.write("</tr>");
    }
    resp.write("</table>");
    resp.write("</body></html");

    resp.end();

});

server.listen(8080, 'localhost');