var fs = require('fs');

var data = fs.readFileSync('./package.json', 'utf8'); //readFile로도 동작하나 차이가 있음
console.log (data);

