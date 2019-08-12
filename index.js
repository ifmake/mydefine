/**
 * 原型的一些认识
 */

// 全文单词首次字母大写 
// function replaceFirstUper (str) {
//     str = str.toLowerCase();
//     return str.replace(/\b(\w)|\s(\w)/g, function(mr) {
//         return mr.toUpperCase();
//     })
// }
// console.log(replaceFirstUper('i have a pen, i have an apple!'));

// // 简单实现
// class TargetObj {
//     name;
//     constructor(age, name) {
//         this.name = name;
//         this.age = age;
//     }
//     set name(val) {
//         console.log('name值类型', this.name)
//         observer(name, val);
//         this.name = val;
//     }
//     get name() {
//         return this.name
//     }
// }

// let targetObj = new TargetObj(1, 'Martin');

// // 定义值改变时的处理函数
// function observer(oldVal, newVal) {
// 	// 其他处理逻辑...
//     console.info('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
// }
// targetObj.name = 'Lucas';
// console.info(targetObj)

// proxy 的使用
// const obj = {
//     a:10,
//     b:20,
//     c: [1,2]
// }
// const handdler = {
//    get:(obj, key) => {
//     console.log(obj,key);
//     return 2;
//     }
// }
// const proxy = new Proxy(obj, handdler)
// proxy.a = 50;
// proxy.c.push(3)
// // proxy.get('a');
// console.log(proxy);

// function add () {
    
// }

// add.a = 1;
// add.prototype.a = 3;
// const add1 = new add()
// add.getName = function() {console.log('1111')}
// console.log(add1.a);



// setTimeout(()=>{
//     console.log('timer1')
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
// }, 0)
// setTimeout(()=>{
//     console.log('timer2')
//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
// }, 0)
// node 环境 timer1 > timer2 > promise1 > promise2
// 浏览器环境 timer1 > promise1 > timer2 > promise2
const iterable = [1,2];
console.log(iterable[Symbol.iterator]())
const iterator = iterable[Symbol.iterator]()
iterator.next();
console.log(iterator.next())
console.log(iterator.next())


