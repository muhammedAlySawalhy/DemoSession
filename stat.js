const fs = require('fs');
fs.stat('sample.txt',(err,s)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(s.isDirectory());
    console.log(s.isFile());
    console.log(s.gid);
    console.log(s.size);

    console.log(s.uid);
    console.log(s.atime);
    console.log(s.birthtime);
    
})