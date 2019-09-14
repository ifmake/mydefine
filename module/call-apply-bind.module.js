
/**
 * call 函数
 * 将函数设为对象的属性,
 * 执行&删除这个函数,
 * 指定this到函数并传入给定参数执行函数,
 * 如果不传入参数，默认指向为 window
 */
const CallRzl = (function(){
    Function.prototype.callRzl = function (protoRzl = window) {
        if(typeof this  !== 'function'){
            return '不是一个函数'
        }
        protoRzl.fn = this;
        let args = [...arguments].slice(1);
        let result = protoRzl.fn(...args);
        delete protoRzl.fn;
        return result;
     }  
})();

/**
 * apply 函数
 * 类似call 传递参数不同
 */
const ApplayRzl = (function(){
    Function.prototype.applyRzl = function(protoRzl = window) {
        if(typeof this  !== 'function'){
            return '不是一个函数'
        }
        protoRzl.fn = this;
        let result; 
        if(arguments[1]){
           result = protoRzl.fn(...arguments[1]) 
        } else {
           result = protoRzl.fn();   
        }
        delete protoRzl.fn;
        return result;
    }
})()
/**
 * bind 函数
 * 创建一个新函数
 * bind不是一个立即执行函数,
 * 实现需要考虑对原型链的影响
 */
const BindRzl = function(){
    Function.prototype.bindRzl = function(protoRzl){
        if(typeof this  !== 'function'){
            return '不是一个函数'
        }
        let fn = this;
        let args = Array.prototype.slice(arguments, 1);
        let resFn = function() {
            return fn.apply(this instanceof resFn?this:protoRzl, args.concat(...arguments))
        }
        function temp (){};
        temp.prototype  = this.prototype;
        resFn.prototype =  new temp();
        return resFn;
    }
}

export {
    CallRzl,
    ApplayRzl,
    BindRzl
}