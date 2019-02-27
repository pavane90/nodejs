var fs = require ('fs');

//readFile은 비동기 방식으로 파일이 들어오면 콜백함수로 데이터를 던진다.
//readFildSync는 파일을 다 읽을때까지 대기한다.
fs.readFile('./package.json', 'utf8', function(err, data){
    console.log (data);
});

/*
    readFile(filename, [encoding], [callback])
    비동기식 IO로 파일을 읽음

    readFileSync(filename, [encoding])
    동기식 IO로 파일을 읽음

    writeFile(filename, data, encoding='utf8', [callback])
    비동기식 IO로 파일을 씀

    writeFileSync(filename, data, encoding='utf8')
    동기식 IO로 파일을 씀
*/
