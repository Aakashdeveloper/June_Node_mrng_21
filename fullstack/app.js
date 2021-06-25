var express = require('express');
var app = express();
var port = 5600;

app.get('/',function(req,res){
    res.send("Hii From express");
})

app.get('/city',function(req,res){
    res.send("Hiii from city");
})

app.get('/hotels',function(req,res){
    res.send("Hiii from hotels page");
})

app.listen(port, function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})