// dvieju trumpu krastiniu ilgis turi buti didesnis uz 1 ilgos
//a+b>c a+c>b b+c>a
const chalk = require('chalk');
const isTriangle = (a,b,c) => {
    if(a+b>c && a+c>b && b+c>a){
            return true;
        }else{
            return false;
        }
}
const triangle = (a,b,c) => {
    if(isTriangle(a,b,c)){
            console.log(chalk.green("Triangle is formable"));
        }else{
            console.log(chalk.red("Triangle is not formable"));
        }
}
module.exports={isTriangle, triangle,};

