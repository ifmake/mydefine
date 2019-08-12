/**
 * 实现new 操作符
 * new 操作符实现步骤
 * 创建新对象
 * 他会被执行[[Prototype]]（也就是 __proto__）链接。
 * this 指向新创建对象
 * 通过 new创建的每个对象将最终被 [[Prototype]]链接到这个函数的 prototype对象上
 * 如果函数没有返回对象类型 Object(包含 Functoin,Array,Date,RegExg,Error)，那么 new表达式中的函数调用将返回该对象引用
 */
function newRzl(fun) {
    const res = {};
    if(fun.prototype !== null) {
      res._proto_ = fun.prototype;
    }
    const ret = fun.apply(res, Array.prototype.slice.call(arguments, 1));
    if((typeof ret  === 'object' || typeof ret === 'function')&& ret !== null){
      return ret;
    }
    return res;
}



export {
  newRzl
} 