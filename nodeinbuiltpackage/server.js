var http = require('http');

var server = http.createServer(function(req, res){
    res.write('<h1>Created First Node Server app</h1>')
})

server.listen(3400)


////////////////////////////////
/*
    > Req > What ever we will send to the server
    like params, query params, body 
    > Res > what server will respond 
*/