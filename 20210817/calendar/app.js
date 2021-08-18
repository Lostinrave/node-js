const http=require('http'); //Prisidedame HTTP moduli
const fs=require('fs');     //Prisidedame FS moduli
const path=require('path');
const year=require('./year');

//Sukuriam serveri ir paduodame f-ją kuri aptarnaus vartotojų užklausas
const server=http.createServer((req, res)=>{
    const url=req.url;         //  /informacija.txt
    const method=req.method;
    let file='./public'+url;   //Turime kintamaji su failo pavadinimu: ./public/informacija.txt


    //Patikrinsim ar failas egzistuoja ir ar jis yra failas
    if (fs.existsSync(file) && fs.lstatSync(file).isFile()){
        let stream=fs.readFileSync(file); //Nuskaitome failo turinį į kintamąjį stream
        const ext=path.parse(file).ext;   // Paimama failo galunė
        //Jei failo glune css, server sakys kad persiunčia css faila
        if (ext=='.css') res.setHeader('Content-Type', 'text/css'); 
        //Jei failo glune png, server sakys kad persiunčia png paveiksla
        if (ext=='.png') res.setHeader('Content-Type', 'image/png'); 
        if (ext=='.jpg') res.setHeader('Content-Type', 'image/jpeg'); 
        if (ext=='.ico') res.setHeader('Content-Type', 'image/jpeg'); 

        res.write(stream); //Išvedėme vartotojui failą
        return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
    }
    //Jei formoje paspaude mygtuka calculate (todel atejo su POST metodu ir url metai)
    if(method==='POST'&&url==='/year'){
        let data=[]; //I masyva desime atsiustus formos duomenis
        req.on('data', (chunk)=>{
            data.push(chunk); //I masyva  idedame atskiras isiustas dalis
        });
        req.on('end', ()=>{
            const d=Buffer.concat(data).toString(); //Paimame visus atsiustus duomenis
            const y=parseInt(d.split('=')[1]); //Is atsiustu duomenu pasiimame metus
            const color=year(y);
            let stream=fs.readFileSync('./template/index.html','utf-8'); //Nuskaitome failo turinį į kintamąjį stream
            stream=stream.replace("{{result}}",y+" year color is: <b>"+color+"</b>");
            res.setHeader('Content-Type', 'text/html'); //Nusiuntėme headerį
            res.write(stream); //Išvedėme vartotojui failą
            return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
        });
    }else{
        let stream=fs.readFileSync('./template/index.html','utf-8'); //Nuskaitome failo turinį į kintamąjį stream
        stream=stream.replace("{{result}}","Enter year and press calculate");
        res.setHeader('Content-Type', 'text/html'); //Nusiuntėme headerį
        res.write(stream); //Išvedėme vartotojui failą
        return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
    }
});

server.listen(3000, 'localhost'); 