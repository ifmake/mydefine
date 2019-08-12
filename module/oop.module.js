/**
 * 单例模式
 * 特点: 
 */ 
class singleModel  {
    singleTon;
    constructor() {}
    getInstance() {
        return singleTon;
    }
}
/**
 * 工厂模式
 * 原理: 函数内创建对象，给对象赋予属性及方法再将对象返回
 */ 
class factoryModel {
    single1;
    single2;
    createFactory (type) {
        if(type) {
            return this.single1
        }else {
            return this.single2
        }
    }
}
/**
 * 观察者模式
 * 原理: 对象间的一种一对多的关系，当一个对象的状态发生改变时，所有依赖于它的对象将的到通知更新
 * 特点：
 * 1、observers知道subject，subject还保留了Observers的信息，
 * 2、两者直接通信多为同步实现，subject调用适当Observers的适当方法。
 * 3、观察者模式需要在单个应用空间中实现
 */ 
const EventObserverable = {
    ClientList:{},
    // 定义
    trigger: function (key, fn)  {
        if(this.ClientList[key]){
            this.ClientList[key] = [];
        }
        this.ClientList[key].push(fn)
    },
    // 订阅
    subscribe: function () {
        const key = Array.prototype.shift.call(arguments)
        const fns = this.ClientList[key];
        if(!fns || fns.length === 0 ) {
            return false
        }
        for(let i = 0, fn ; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    },
    remove: function(key, fn) {
        const fns = this.ClientList[key];
        if(!fns) return false;
        if(!fn) {
            fns && (fns.length = 0)
        };
        for(let i = fns.length; i >= 0; i--) {
            if(fn === fns[i]) {
                fns.slice(i,1)
            }
        }
    }
}
const InstallEvent = (Obj) => {
    for(let key in EventObserverable) {
        Obj[key] = EventObserverable[key];
    }
}