const fs = require('fs');
const data = fs.readFileSync('sample.txt');
console.log(data.toString());
console.log(`done reading`);