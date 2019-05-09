
import newRzl from './module/new.module.js';
import {jsonstringifyRzl,JsonParseEvalRzl,JsonParseFunctionRzl} from './module/JSON.module.js'
import {CallRzl,ApplayRzl,BindRzl} from './module/call-apply-bind.module.js'
import {curry,es6Curry} from './module/currying.modul.js'

// new 操作符实现
function newA(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name, this.age)
}
newRzl(newA, '任志量', '123')
new newA('任志量', '12222');

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

function test (a, b, c) {
    return a + b + c;
}
const curringTag = curry(test)
console.log(curringTag(2)(46, 3));
const es6CurryTag = es6Curry((a,b,c) => a+b+c);
console.log(es6CurryTag(1,2)(2))




