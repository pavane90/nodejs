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
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err, stats){
        filelength = stats.size;
    });

    // 헤더 쓰기
    res.writeHead(200, {"Content-Type":"image/png"});

    // 파일 내용 스트림에서 읽어 본문에 쓰기
    infile.on('readable', function(){
        var chunk;
        while (null !==(chunk = infile.read())) {
            console.log('읽어들인크기 :  %d 바이트', chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf8', function(err){
                console.log("파일 부분 쓰기 완료 : %d, 파일 크기 : %d", curlength, filelength);
                if (curlength >= filelength) {
                    //응답 전송
                    res.end();
                }
            });
        }
    });
});

server.on('close', function(){
    console.log('server closed');
});

//화면을 열고 http://localhost:3000에 접속