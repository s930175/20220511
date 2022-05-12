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
        pageTitle:'Book Your Books online',
        products: products,
        path:'/'
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
    res.status(200)
        .render('login',{
            path: '/login',
            pageTitle: 'Login'
        })
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
    res.status(404).render('404',{
        path: '*',
        pageTitle: '404'
    })
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3001, () => {
	console.log('running server on port 3001');
});

const products = [
    {
        title: '四月是你的謊言 1',
        price: 80,
        description: '有馬公生的母親一心想把有馬培育成舉世聞名的鋼琴家，而有馬也不負母親的期望，在唸小學時就贏得許多鋼琴比賽的大獎。11歲的秋天，有馬的母親過世，從此他再也聽不見自己彈奏的鋼琴聲，沮喪的他也只好放棄演奏，但在14歲那年，經由兒時玩伴的介紹，有馬認識了小提琴手宮園薰，並被薰的自由奔放吸引，沒想到薰竟開口邀請公生在比賽時擔任她的伴奏…',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/25/0010622563.jpg&v=52dcfd21&w=348&h=348'
    },
    {
        title: '四月是你的謊言 2',
        price: 80,
        description: '公生答應在二次預賽中擔任小薰的鋼琴伴奏。比賽一開始公生還能順利彈琴，但在中途又再次因為聽不見鋼琴的聲音而停手。沒想到小薰也跟著停止演奏、等候公生。原本心灰意冷的公生因此重新振作，與小薰合奏出驚人的樂章…......',
        imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/31/0010623172.jpg&v=52dcfd21&w=348&h=348'
    },
    {
        title: '四月是你的謊言 3',
        price: 80,
        description: '在小薰的逼迫之下，公生不得不參加音樂比賽。為了參加比賽，公生從早到晚不停的練習，但就是無法彈奏出屬於自己的巴哈與蕭邦。此時，公生的面前出現兩位強勁的對手-相座武士與井川繪見，他們曾經是公生的手下敗將，一心想在比賽中擊敗公生雪恥。先上台演奏的武士彈奏出令全場喝采的激昂樂章…',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/76/0010627615.jpg&v=5315ab5f&w=348&h=348'
    },
];
