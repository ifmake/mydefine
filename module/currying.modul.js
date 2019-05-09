/**
 * 函数柯里化
 * 特点： 参数复用、提前返回和延迟执行
 * 实现：是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 * 并且返回接受余下的参数且返回结果的新函数的技术
 */
// 原生写法
function curry(fn, arg) {
    const length = fn.length;
    const args = arg || [];
    return function () {
        const newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs)
        } else {
            return fn.apply(this, newArgs);
        }
    }
}
// es6 写法
const es6Curry =(fn,arr=[])=>(... args)=>(
        arg=>arg.length===fn.length?fn(...arg):es6Curry(fn, arg)
        )([...arr,...args])
        
export {
    curry,
    es6Curry
}
