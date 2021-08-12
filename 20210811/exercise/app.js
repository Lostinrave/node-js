const http=require('http');



const server = http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;
    let color_td;
    console.log("Ivyko ivykis");
    console.log(url);
    console.log(method);

    resp.setHeader('Content-Type', 'text/html');
    resp.write("<html>");
    resp.write("<head><title>Webpage</title>");
    resp.write("<style>");
    resp.write(`td {width:40px; text-align:center; font-size:14px}`);
    resp.write(`td.red {background-color:#f88;}`);
    resp.write(`tr {height:40px;}`);
    resp.write("</style>");
    resp.write("</head>");
    resp.write("<body>");
    resp.write("<center><h1>Daugybos lentele</h1><center>");
    resp.write("<center><table border='1px'>");
    for (let i = 1; i <= 10; i++) {
        resp.write("<tr>");
        for (var j = 1; j <= 10; j++) {
            if(i == 1 || j == 1) {
                color_td = "class='red'";
            }
            else {
                color_td = "";//#e5e5e5
            }
        resp.write(`<td ${color_td}>${i*j}</td>`);
        }
    resp.write("</tr>");
    }
    resp.write("</table></center>");
    resp.write("</body></html");

    resp.end();

});

server.listen(3064, 'localhost');