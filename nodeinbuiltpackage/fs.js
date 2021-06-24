var fs = require('fs');

/*write in the file*/
/*
// it override the content in same file
fs.writeFile('mytext.txt','This is Coming from Node',function(err){
    if(err) throw err;
    console.log('File Created')
})


// add more content in same file
fs.appendFile('mycode.txt',`This is line ${Math.random()*10000} \n`, function(err){
    if(err) throw err;
    console.log('Content added')
})


// read file 
fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

//rename File
fs.rename('mycode.txt','first.txt',function(err){
    if(err) throw err;
    console.log('file renamed')
})*/

// delete File
fs.unlink('first.txt',function(err){
    if(err) throw err;
    console.log('file delete')
})