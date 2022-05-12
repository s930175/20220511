// console.log('Hello World');
// //require()引入內建模組
// const path = require('path');
// console.log('')

//(一)內建模組
const path = require('path');
// const http = require('http');
// const url = require('url');

//(二)套件模組
const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('http');


//(三)自建模組
// const hello =  require('./hello');

//////////////////////////////
// hello.say();
// console.log(hello.title)
// console.log(url.parse('https://forum.gamer.com.tw/C.php?bsn=5786&snA=155786&tnum=1950'))

// const server = http.createServer((req, res) => {
// 	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
// 	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
//     console.log('req url:', req.url);
//     if (req.url === '/login') {
//         res.statusCode = 200;
//         return res.end('This is login page');
//     };
//     if(req.url === '/hey'){
//         return res.end('This is hey page');
//     }
//     if (req.url === '/') {
//         //'Content-Type': 'text/plain' 變成純文字
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         return res.end('<h1>QQ Why 3000 can not operate</h1>');
//     } 
// 	res.end();
// });

// server.listen(3001, () => {
// 	console.log('running server on port 3001');
// });

const app = express();
//middleware1
app.use((req, res, next) => {
	console.log('Hello!');
    //告知結束，執行下一步
    next();
});
//middleware2
// app.use((req, res, next) => {
// 	console.log('World!');
//     next();
// });
app.set('view engine', 'ejs');
app.set('views', 'views'); // ('views','變動資料夾')預設路徑就是 views，如果沒有變動，可以省略此設定
//middleware 使用靜態資源(CSS JS IMG)(抓public)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//////////////////////////////////////////////
//middleware 中介軟體 '/'為路由，200請求成功，404找不到
app.get('/', (req, res) => {
    res.status(200).render('index', {
        pageTitle:'Book Your Books online'
    })
    //res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>');
    // res.end();
});
app.get('/login', (req, res) => {
    res.status(200).render('login')
    //res.status(200).sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    // console.log('Form email: ', email)
    // console.log('Form password: ', password)
    if(email && password){
        res.redirect('/');
    } else {
		console.log('欄位尚未填寫完成！')
    }
});


//萬用路由*(沒有被設定的路徑)須放在最後面
app.get('*', (req, res) => {
    res.status(404).render('404')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3001, () => {
	console.log('running server on port 3001');
});
