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
// hello.say();
// console.log(hello.title)


const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    console.log('req url:', req.url);
    if (req.url === '/login') {
        res.statusCode = 200;
        return res.end('This is login page');
    };
    if(req.url === '/hey'){
        return res.end('This is hey page');
    }
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end('<h1>QQ Why 3000 can not operate</h1>');
    } 
	res.end();
});

server.listen(3001, () => {
	console.log('running server on port 3001');
});

