

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
    self.value = undefined;
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
    // return new PromiseRzl((resolve, rejected) => {
    //     const ret = fn(this.value);
    //     switch(this.status){
    //         case 'success':
    //                 resolve(ret)
    //                 break;
    //         case 'err':
    //                 rejected(ret)
    //                 break;
    //         default:
    //     }
    // })
    
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

/**
 * 观察者模式实现promise Class类 ----------------------------------------------------------------------------
 */
class PromiseRzlClass {
    callBacks = []; // 响应存储
    status = 'pending'; // 返回状态  pending  resolved rejected
    value = undefined  // 保存结果
    
    constructor(fn) {
        fn(this._resolve.bind(this), this._reject.bind(this));
    }
    // resolved 处理
    _resolve(value) {
        // 特殊判断 判断是否为promise的实例
        if (value && (typeof value === 'object' || typeof value === 'function')) {
            var then = value.then;
            if (typeof then === 'function') {
                // 当前promise 值状态为resolve 返回的promise实例状态
                then.call(value, this._resolve.bind(this));
                return;
            }
        }
        this.status = 'resolved'; // 变更状态
        this.value = value || undefined; // 保存返回值
        this.callBacks.forEach(handle => this._handle(handle)); // 执行响应回调
    }
    // reject 处理
    _reject(Err){
        this.status = 'rejected'
        this.value = Err;
        this.callBacks.forEach(handle => this._handle(handle))
    }
    // then 回调
    then(resolved, rejected) {
        return new PromiseRzlClass((resolve,reject) => {
            this._handle({
                onResolved: resolved || null,
                onRejected: rejected || null,
                resolve,
                reject
            })
        })
    }  
    _handle(handle) {
        if(this.status ==='pending'){
            this.callBacks.push(handle);
            return 
        }
        let cb = this.status === 'resolved' ? handle.onResolved : handle.onRejected;
        //如果then中没有传递任何东西
        if (!cb) {
 
            cb = this.status === 'resolved' ? handle.resolve : handle.reject;
            cb(this.value);
            return;
        }
        // 返回新value值
        let ret = cb(this.value);
        cb = this.status === 'resolved' ? handle.resolve : handle.reject;
        cb(ret);   

    }
    // catch 回调
    catch(errorBack) {
        return this.then(null, errorBack);
    }
    // finally 回调
    finally(Done) {
        if(typeof Done === 'function') return this.then();
        const Rpromise = this.constructor;
        return this.then(
            value => Rpromise.resolve(onDone()).then(() => value),
            reason => Rpromise.resolve(onDone()).then(() => { throw reason })
          );
    }
    /**
     *  静态方法
     *  resolve  reject实现   Promise.resolve(value) 等价于 new Promise(resolve => resolve(value))
     *  接收4种类型： 1、无参数 2、参数不是具有then 方法的对象，或者不是对象 3、带有then回调函数的对象 4、 Promise 实例
     *  
     */
    static resolve(value) {
        if(value && value instanceof PromiseRzlClass ) {
            return value;
        }else if(typeof value === 'object' && typeof value.then === 'function'){
            const then = value.then
            return new PromiseRzlClass((resolve)=> {
                then(resolve)
            })
        }else if(value) {
            return new PromiseRzlClass(resolve => resolve(value))
        }else {
            new PromiseRzlClass(resolve => resolve())
        }
    }

    static reject(value) {
        if(value && value instanceof PromiseRzlClass ) {
            return value;
        }else if(typeof value === 'object' && typeof value.then === 'function'){
            const then = value.then
            return new PromiseRzlClass((resolve,reject)=> {
                then(reject)
            })
        }else if(value) {
            return new PromiseRzlClass((resolve,reject) => reject(value))
        }else {
            new PromiseRzlClass((resolve,reject) => reject())
        }
    }

    /**
     * all race 实现 for 循环异步返回结果数组（all）或者第一个返回的结果值(race)
     */
    static all() {
        // 支持数组或者参数形式
        let args = Array.prototype.slice.call(arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : arguments)
        return new PromiseRzlClass((resolve, reject)=>{
            if (args.length === 0) return resolve([]);
            let len = args.length;
            function respone(i, val) {
                try {
                    // 判断promise 对象
                    if (val && (typeof val === 'object' || typeof val === 'function')) {
                      var then = val.then
                      if (typeof then === 'function') {
                        // 重复执行then回调
                        then.call(val, function (val) { respone(i, val) }, reject)
                        return
                      }
                    }
                    args[i] = val
                    if (--len === 0) {
                       console.log(len);
                      resolve(args);
                    }
                  } catch (ex) {
                    reject(ex)
                  }
            }
            // 循环拉取promise对象
            for (var i = 0; i < args.length; i++) {
                respone(i, args[i])
              }
        })
    }
    // 最新源码内容
    static race() {
        let args = Array.prototype.slice.call(arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : arguments)
        return new Promise(function (resolve, reject) {
            args.forEach(function(value){
              // 有一个返回了触发then 函数
              Promise.resolve(value).then(resolve, reject);
            });
          });
    }
}



/**
 * Async 、awiat 实现
 * @param fun 为一个gennerator函数
 * gennerator 函数中带有返回promise对象的函数返回结果
 */
 
 function asyncFun (fun) {
    const genFun = fun();
    function next(data) {
        const result = genFun.next(data);
        if(result.done) return result.value;
        result.value.then((res) => {
            next(res);
        })
    } 
    next();
 }

export {
    PromiseRzl,
    PromiseRzlClass,
    // async/await 
    asyncFun
}