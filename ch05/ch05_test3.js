var http = require('http');

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

    res.writeHead(200, {"Content-Type" : "Text/html; charset=utf-8"}); // 응답 헤더 작성
    res.write("<!DOCTYPE html>"); // 응답 본문 작성
    res.write("<html>");
    res.write(" <head>");
    res.write(" <title>hello</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write(" <h1>response page by node.js</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end(); // 응답을 전송함, res에 데이터가 있다면 함께 보낼 수 있다, 콜백함수를 지정하면 전송뒤에 콜백호출도 가능
});

server.on('close', function(){
    console.log('server closed');
});

//화면을 열고 http://localhost:3000에 접속