/**
 * 实现JSON.stringify
 * boolean | string | number 自动转化为原始值，undefined, 任意函数以及symbol会被忽略，或者被转换成null
 * 不可枚举属性被忽略
 * 对象属性通过某种间接的方式指挥本身，循环引用会被忽略
 */

 function jsonstringifyRzl(obj) {
        let type = typeof obj;
        if(type !== 'object'){
            if(/string|undefined|function/.test(type)){
                obj = `"${obj}"`
            }
            return String(obj);
        }else {
            let json = [];
            let arr = Array.isArray(obj);
            for( let key in obj ) {
                let  value = obj[key];
                let  nextType = typeof value;
                if(/string|undefined|function/.test(nextType)) {
                    value = `"${value}"`
                }else if (nextType === 'object') {
                    value = jsonstringifyRzl(value) 
                }
                json.push((arr?'':`'${key}:'`) + String(value))
            }
            return (arr?'[':'{') + String(json) + (arr?']':'}')
        }
 }

 /**
  * 实现JSON.parse
  * 用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
  * 提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。
  * way1: 不建议使用eval函数，eval函数非常危险， 他执行的代码拥有着执行者的权利，可能造成XSS漏洞，因此需校验
  * way2: Function()
  * way3, way4。繁琐递归及状态机相关原理。 
  */
// way1
function JsonParseEvalRzl(jsonstr) {
    const rpq_one = /^[\],:{}\s]*$/;
    const rpq_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    const rpq_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    const rpq_four = /(?:^|:|,)(?:\s*\[)+/g;
    if(
        rpq_one.test(jsonstr
            .replace(rpq_two, "@")
            .replace(rpq_three, "]")
            .replace(rpq_four, ""))   
    ) {
        return eval(`(${jsonstr})`)  
    }
        return '非法json字符串'
}
// way2
function JsonParseFunctionRzl(jsonstr){
    const obj =  (new Function(`return${jsonstr}`))()
    return obj;
}

 export  {
     jsonstringifyRzl,
     JsonParseEvalRzl,
     JsonParseFunctionRzl
    };