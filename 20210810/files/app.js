// creats file
const fs = require('fs'); // library from node.js docs (file system)
const os = require('os');

fs.writeFileSync('text.txt','Hello world');
fs.appendFileSync('text.txt',' whats up?');

console.log(os.cpus());