//hello.js(這個模組定義一個叫sayHello的方法)
const sayHello = () => {
    console.log('Hello!');
};
//匯出一個自訂一名稱(供匯出後使用) = const後的名字
module.exports.say = sayHello;