// console.log('Hello World');
// //require()引入內建模組
// const path = require('path');
// console.log('')

//(一)內建模組
const path = require('path');
const http = require('http');

//(二)套件模組
const cowsay = require('cowsay');
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

//(三)自建模組
const hello =  require('./hello');

//////////////////////////////
hello.say();
console.log(hello.title)