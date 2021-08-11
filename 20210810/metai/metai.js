const chalk = require('chalk');
const isKeliamieji = (metai) => {
    if(metai% 400==0 || metai % 100!=0 && metai%4==0){
            return true;
        }else{
            return false;
        }
}
const keliamieji = (metai) => {
    if(isKeliamieji(metai)){
            console.log(chalk.green("Metai keliamieji"));
        }else{
            console.log(chalk.bgRed("Metai paprastieji"));
        }
}

module.exports={keliamieji, isKeliamieji};