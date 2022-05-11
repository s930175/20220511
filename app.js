// console.log('Hello World');
// //require()引入內建模組
// const path = require('path');
// console.log('')

//(一)內建模組
const path = require('path');
const http = require('http');

//(二)套件模組


//(三)自建模組
const hello =  require('./hello');

//////////////////////////////
hello.say();
console.log(hello.title)