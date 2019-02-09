var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Calc = function(){
    this.on('stop', function(){
        setTimeout(function(){
            console.log('Calc에 stop이벤트 전달됨.');
        },500);
    });
};

util.inherits(Calc, EventEmitter); //뒤에있는 부모로 보고 상속된 Calc를 만든다.

Calc.prototype.add = function(a,b){
    return a+b;
}

module.exports = Calc;