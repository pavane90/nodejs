var fs = require('fs');

//비동기로 파일 읽어온 뒤 비동기로 쓰기
fs.readFile('./package.json', 'utf8', function(err, data){
    if(err) {
        console.log ('파일 읽기에 에러가 발생했어요' + err);
        return;
    }
    fs.writeFile('./output.txt', data, function(err){
        if (err) {
            console.log ('에러가 발생했습니다.' + err);
            return;
        }
        console.log ('data쓰기 완료');
    });
});

