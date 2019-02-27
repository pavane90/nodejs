var output = 'hello';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
console.log ('buffer length : ' + len);
console.log ('first string : ' + buffer1.toString());

console.log ('버퍼 객체인지 여부 : ' + Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(buffer1);
console.log (byteLen); // 글자와 상관없이 Buffer(10)이므로 10이 나옴

var str1 = buffer1.toString('utf8', 0, 5);
console.log (str1);