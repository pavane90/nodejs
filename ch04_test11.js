var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags:'r'}); //r모드로 파일을 읽어들임, 스트림으로도 처리가능
infile.on ('data', function(data){
    console.log('읽어들인 데이터 : ' + data);
});

infile.on('end', function(){
    console.log('읽기 종료');
});