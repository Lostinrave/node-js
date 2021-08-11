const {isTriangle, triangle} = require("./triangle");
// const chalk = require('chalk');
let a = parseInt(process.argv[2]); 
let b = parseInt(process.argv[3]); 
let c = parseInt(process.argv[4]); 


triangle(a,b,c);
