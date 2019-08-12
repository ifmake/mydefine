/**
 * 三种状态： pending、resolve、rejected
 * 当为pending时刻转移至 resolve或者rejected状态, 状态不可逆
 * 必须有一个then异步执行方法，then接收两个参数，必须返回一个promise
 * @param {promise实现} constructor 
 */

function PromiseRzl(constructor) {
    let self = this;
    self.status = 'pending';
    self.success = undefined;
    self.err = undefined;
    // 成功
    function resolve(success) {
        if(self.status === 'pending'){
            self.status = 'success';
            self.success = success;
        }
    }
    // 失败
    function rejected (err) {
        if(self.status === 'pending'){
            self.status = 'err';
            self.err = err;
        }
    }
    try{
        constructor(resolve,rejected)  
    }catch(err){
        rejected(err)
    }
} 
// 定义链式调用then方法
PromiseRzl.prototype.then = function(resolve,rejected) {
    switch(this.status){
        case 'success':
                resolve(this.success)
                break;
        case 'err':
                rejected(this.err)
                break;
        default:
    }
}

// promise.all 方法实现 传入Promise[], 返回结果有效值

PromiseRzl.prototype.all = function(promises) {
    return new Promise(function (resolve, reject) {
        if (Object.prototype.toString.call(promises) !== '[object array]') {
            return reject('no array')
        }
        let countNum = 0;
        const promiseNum = promises.length;
        const successValue = new Array(promiseNum);
        const errValue = new Array(promiseNum)
        for (let i = 0; i < promiseNum; i++) {
            (Promise.resolve(promises[i]).then(function (value) {
                countNum++;
                successValue[i] = value;
                if (countNum === promiseNum) {
                    return resolve(successValue)
                }
            }, function (err) {
                errValue[i] = err
                return reject(errValue)
            })
            )()
        }
    })
}

/**
 * promise.race 方法实现 传如Promise[], 返回最先返回的值
 * 劣势：
 * 1、在单页应用中resolve回调里需进行try/catch处理，回调中有DOM操作时。接口响应较慢时进行路由切换时，可能导致报错，及页面卡死。
 * 2、接口响应慢而导致的竟态条件问题（运行程序顺序改变会影响最终结果）
 * 避免：
 * 1、提升响应速度，对错误进行处理
 * 2、通过函数式编程流的写法避免 如：rxjs
 */ 
PromiseRzl.prototype.race = function (promises) {
    return new Promise(function (resolve, reject) {
        if (Object.prototype.toString.call(promises) !== '[object array]') {
            return reject('no array')
        }
        const promiseNum = promises.length;
        for(let i = 0 ; i < promiseNum; i ++) {
            Promise.resolve(promiseNum[i]).then(function(value) {
                resolve(value);
            },function(err){
                reject(err);
            })
        }
    })
}

export {
    PromiseRzl 
}