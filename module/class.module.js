/**
 * es5 实现es2015 Class类
 */

 // es6 class

class Child  {
    constructor(){
        this.name = 'rzl'
    }
}
class Person {
    constructor(){
        this.fname = 'rzm'
    }
}
// es5 实现
// 父类
const Person = (function(){
        // 检测是否被调用
        function _checkClass(instance, constructor){
            if(!(instance instanceof constructor)){
                throw new Error('constructor is no class')
            }
        }
        function Person (fname){
            this.fname = fname;
            _checkClass(this, Person)
        }
        Person.prototype.SayName = function(name){
            console.log('父类设置' + name)
        }
        return Person;
    })()
// 子类
const Child = (function(Person) {
    function _checkClass(instance, constructor){
        if(!(instance instanceof constructor)){
            throw new Error('不能通过new得到')
        }
    }
    // 子类继承父类的方法
    function __inherins (subclass, superclass){
        subclass.prototype  =  Object.create(superclass.prototype, { constructor: { value:  subclass } })
        Object.setPrototypeOf(subclass, superclass)
    }
    __inherins(Child,Person)
    function Child (name){
        let obj=Person.call(this)//子类继承私有属性
        let that=this;
        if(typeof obj=='object'){
            that=obj
        }
        that.name=1;//解决了父类是引用类型的问题
        _classCheck(this, Clild)
        return that 
    }
    return Child;
    })(Person)