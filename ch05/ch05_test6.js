var http = require('http');
var fs = require('fs');

var server = http.createServer();
var port = 3000;
server.listen(port, function(){
    console.log ('web server is started : %d', port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log ('client is connected : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){
    console.log ('client requests are received');
    console.log(req);
    
    var filename = 'ch05/cordova_bot.png';
    var infile = fs.createReadStream(filename, {flags:'r'});

    // pipe
    infile.pipe(res);
});

server.on('close', function(){
    console.log('server closed');
});

//화면을 열고 http://localhost:3000에 접속