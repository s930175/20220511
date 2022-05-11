//hello.js(這個模組模式定義一個叫sayHello的方法)
const path = require('path');

const title = 'I am Hello Title';

const sayHello = () => {
    console.log('Hello!');
};
const sayGoodNight = () => {
    console.log('Good night!');
};
//匯出一個自訂一名稱(供匯出後使用) = const後的名字
//module.exports.say = sayHello;

//用物件模式
// module.exports = {
//     say: sayHello,
//     sayGoodNight: sayGoodNight,
//     title: 'I am Hello Title'
// };

//JS remarks(key=value可縮寫)
module.exports = {
    say: sayHello,
    sayGoodNight,//=sayGoodNight: sayGoodNight,
    title,
};

 console.log('dirname', __dirname);//(查詢所在資料夾)
// console.log('filename', __filename);//(查詢完整路徑名稱)
//console.log('module', module);//node hello.js
//組合路徑到index.js裡
//console.log(Path.join(__dirname, 'index.js'));

