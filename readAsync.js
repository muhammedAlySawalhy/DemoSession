const fs = require('fs');
console.log('before');
fs.readFile('sample.txt',(err,data)=>{
   if(err){
    console.log(err);
    return;
   }
   console.log(data.toString());
 })
 console.log('after');