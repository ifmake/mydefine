
/**
 * 寄生组合式继承
 * 特点： 一次实例中调用一次父类的构造函数。
 * 实现： 使用一个空构造函数取代执行了的父级构造函数
 */

 function parent(name) {
    this.name = name;
 }
 parent.prototype.callname = function() {
     console.log('父亲的名字', this.name)
 }

 function Child(name, fatherName) {
    parent.call(this, fatherName);
    this.name = name;
 }

 function Extends (proto) {
     function Sky(){};
     Sky.prototype = proto;
     return new Sky();
 }
 Child.prototype = Extends(parent.prototype);
 Child.prototype.callName = function() {
     console.log('孩子的名字', this.name);
 }
 Child.prototype.constructor = Child;

