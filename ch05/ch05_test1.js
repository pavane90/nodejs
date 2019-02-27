// create web server by node.js

var http = require('http');

var server = http.createServer();
var port = 3000; // 포트번호 지정
var host = '192.168.x.x' // 받을 ip 지정
// listen (port[,host][,backlog][,callback]) port번호, 호스트ip, 동시접속수를 연결하는 정보
server.listen(port, host, '50000', function(){
    console.log('server started : %s, %d', host, port);
});