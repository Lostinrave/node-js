const http=require('http');



const server = http.createServer((req, resp)=>{
    const url=req.url;
    const method=req.method;

    console.log("Ivyko ivykis");
    console.log(url);
    console.log(method);

    resp.setHeader('Content-Type', 'text/html');
    resp.write("<html>");
    resp.write("<head><title>Webpage</title></head>");
    resp.write("<body>");
    resp.write("<center><h1>Daugybos lentele</h1><center>");
    resp.write("<center><table border='1px'>");
    for (let a = 1; a <= 10; a++) {
        resp.write("<tr style='height:40px'>");
        for (var b = 1; b <= 10; b++) {
            if(a == 1 || b == 1) {
                color_td = "#e04411";
            }
            else {
                color_td = "#e5e5e5";
            }
        resp.write(`<td style="width:40px;background-color:${color_td}"><center><font size="4">${a*b}</center></font></td>`);
        }
    resp.write("</tr>");
    }
    resp.write("</table></center>");
    resp.write("</body></html");

    resp.end();

});

server.listen(3064, 'localhost');