// process.on에 함수명을 지정하고 (exit) 이것을 호출하면 함수내의 내용을 실행한다.
process.on('exit', function(){
    console.log('exit event called');
});

// callback
process.on('tick', function(count){
    console.log('tick event called : ' + count);
})

// 바로 실행이 되므로 2초후에 실행이 되도록 setTimeout을 설정
setTimeout(function(){
    console.log('2second after');
    
    process.emit('tick', '2');
    process.exit();
}, 2000);

// 실행즉시 출력되는 로그
console.log('wait for 2seconds');

