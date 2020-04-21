
import {newRzl} from './module/new.module.js';
import {jsonstringifyRzl,JsonParseEvalRzl,JsonParseFunctionRzl} from './module/JSON.module.js'
import {CallRzl,ApplayRzl,BindRzl} from './module/call-apply-bind.module.js'
import {curry,es6Curry} from './module/currying.module.js'
import {PromiseRzl,PromiseRzlClass,asyncFun} from './module/promise.module.js'
import  {bubbleSort,selectSort} from './module/sort.module.js'

// new 操作符实现
// function newA(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this.name, this.age)
// }
// newRzl(newA, '任志量', '123')
// new newA('任志量', '12222');

// JSON.stringify 实现
// console.log(
// jsonstringifyRzl('12312312312'),
// jsonstringifyRzl(undefined),
// jsonstringifyRzl([]),
// jsonstringifyRzl(false),
// jsonstringifyRzl({name: '任志量', age: '26', info: {school: 'ceedd', father: 'sdfsdf'}})
// )
// // JSON.parse实现
// console.log(
//     JsonParseEvalRzl('{ "age": 20, "name": "jack" }'),
//     JsonParseFunctionRzl('{ "age": 20, "name": "jack" }')
//     );
// call apply  bind实现
// CallRzl;
// ApplayRzl;
// BindRzl;
// let foo = {
//     value: 23
// }
// function bar(name, age){
//     console.log(name);
//     console.log(this.value);
// }
// bar.callRzl(foo, 'rzl', '12')
// bar.applyRzl(foo, ['rzl', 12]);
// bar.bindRzl(foo)('rzl', 12)

// 函数柯里化

// function test (a, b, c) {
//     return a + b + c;
// }
// const curringTag = curry(test)
// console.log(curringTag(2)(46, 3));
// const es6CurryTag = es6Curry((a,b,c) => a+b+c);
// console.log(es6CurryTag(1,2)(2))

// 手写promise
const promise = (params) =>  (new PromiseRzlClass((resolve, reject) => {
    setTimeout(() => {
        resolve(params)
    },500)
}))
// 函数生成器
function* genn(params) {
    const reuslt = yield promise('333333')
    console.log('当前控制', reuslt);
    return reuslt;
}
asyncFun(genn);
// promise.then(tip1 => {
//     console.log('then1', tip1)
//     return 'tipcesss'
// })
// const time2 = new PromiseRzl((resolve) => {
//     resolve(5)
// })
// const time1 = new PromiseRzl((resolve) => {
//     resolve(1)
// })

// const PromiseALl =  PromiseRzlClass.all([time2,time1])
// PromiseALl.then((res) => {
//     console.log('当前结果', res);
// })
// promise.then(tip1 => {
//         console.log('then1', tip1);
//         return 'then12222222'
//     // resolve('第一次成功');
// }).then(tip2 => {
//     console.log('then2', tip2);
// })



// 排序算法
// let Bubbleresult = bubbleSort([3,5,1,2,4])
// let selectResult = selectSort([3,5,1,2,4,0])
// console.log('1222222',selectResult)








