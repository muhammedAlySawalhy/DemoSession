const fs = require('fs');
// fs.watchFile(`sample.txt`,(curr)=>{
//     console.log(curr.atime)
// })
fs.watch(`sample`,(evnt,data)=>{
    console.log(`${evnt}:${data}`)
})