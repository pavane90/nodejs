var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd){// 파일명, 권한, 콜백함수
    if(err) {
        console.log ('에러가 발생했습니다.');
        console.dir (err);
        return;
    }
    var buf = new Buffer('Hello\n')
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
       if (err){
           console.log ('파일 쓰기시 에러발생.');
           console.dir (err);
           return;
       } 
       console.log ('파일 쓰기 완료함');

       fs.close(fd, function(){
            console.log ('파일 닫기 완료함.');
       });
    });
}); 