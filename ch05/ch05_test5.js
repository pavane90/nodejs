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
    fs.readFile(filename, function(err ,data) {
        res.writeHead(200, {"Content-Type" : "image/png"}); // 응답 헤더 작성
        res.write(data);
        res.end(); // 응답을 전송함, res에 데이터가 있다면 함께 보낼 수 있다, 콜백함수를 지정하면 전송뒤에 콜백호출도 가능
    });
});

server.on('close', function(){
    console.log('server closed');
});

//화면을 열고 http://localhost:3000에 접속