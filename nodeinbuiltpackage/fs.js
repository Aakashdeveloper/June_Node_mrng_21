var fs = require('fs');

/*write in the file*/
fs.writeFile('mytext.txt','This is Coming from Node',function(err){
    if(err) throw err;
    console.log('File Created')
})

