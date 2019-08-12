/**
 * instanceOf内部实现
 * 特性 判断一个变量是否为某一个对象的实例
 * @param {*} left 
 * @param {*} right 
 */
function instanceOfRzl(left,right){
    let leftProto = left.__proto__;
    let rightProtoType = right.prototype;
    while(true){
        if(leftProto===null) return false;
        if(leftProto === rightProtoType) return true;
        leftProto = leftProto.__proto__;
    }
}