var fs = require('fs');

/*
var infile = fs.createReadStream('./ch04/input.txt', {flags:'r'}); //r모드로 파일을 읽어들임, 스트림으로도 처리가능
infile.on ('data', function(data){
    console.log('읽어들인 데이터 : \n' + data);
});
*/
fs.readFile('./ch04/input.txt', 'utf8', function(err, data){
    if (err){
        console.log ('err' + err)
    } else {
        // data split by space
        var strArray = data.split(/\s+/);;
        //console.dir (strArray);

        //print only name
        for (i=0; i<strArray.length; i=i+3){
            console.log (strArray[i]);
        }
    }
});