var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.config();
var fs = require('fs');
var port = process.env.PORT || 5600;
var hotelRouter = require('./src/router/hotelRoutes')
var cityRouter = require('./src/router/cityRouters');
var morgan = require('morgan');
// middleware
app.use(morgan('combined'))
// save logs in file
app.use(morgan('dev',{stream: fs.createWriteStream('./app.log', {flags:'a'})}))

// static file path 
app.use(express.static(__dirname+'/public'))
//Html File
app.set('views','./src/views');
// view engine
app.set('view engine', 'ejs')

app.get('/',function(req,res){
    //res.send("Hii From express");
    res.render('home',{title:'Home Page',keyword:'Node Fullstack'})
})

app.use('/hotel',hotelRouter);
app.use('/city', cityRouter);


app.listen(port, function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})