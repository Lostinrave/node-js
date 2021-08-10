const validator = require('validator');

if(validator.isURL("http://delfi.lt")){
    console.log("URL teisingas");
}else{
    console.log("URL neteisingas");
}