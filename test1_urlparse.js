var url = require('url');

var curURL = url.parse('https://m.searcn.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

//URLオブジェクトをURL文字列化
var curStr = url.format(curURL);

console.log ('URL文字列 : %s', curStr);
console.dir (curURL);

// パラメーター分離
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log ('query : %s', param.query);
console.log ('original parameter : %s', querystring.stringify(param));