const { keliamieji, isKeliamieji } = require("./metai");
const chalk = require("chalk");
//console.log(process.argv);
let metai = process.argv[2]; // isvieciami programos argumentai ([2]-paimamas argumento saraso indeksas)
if (isKeliamieji(metai)) {
  console.log(chalk.green("Metai keliamieji"));
} else {
  console.log(chalk.bgRed("Metai paprastieji"));
}
// console.log(isKeliamieji(2020));
