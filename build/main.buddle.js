/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.module.js":
/*!*************************!*\
  !*** ./index.module.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_new_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/new.module.js */ \"./module/new.module.js\");\n/* harmony import */ var _module_JSON_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/JSON.module.js */ \"./module/JSON.module.js\");\n/* harmony import */ var _module_call_apply_bind_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/call-apply-bind.module.js */ \"./module/call-apply-bind.module.js\");\n/* harmony import */ var _module_currying_modul_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/currying.modul.js */ \"./module/currying.modul.js\");\n\n\n\n\n\n\n// new 操作符实现\nfunction newA(name, age) {\n    this.name = name;\n    this.age = age;\n    console.log(this.name, this.age)\n}\nObject(_module_new_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newA, '任志量', '123')\nnew newA('任志量', '12222');\n\n// JSON.stringify 实现\n// console.log(\n// jsonstringifyRzl('12312312312'),\n// jsonstringifyRzl(undefined),\n// jsonstringifyRzl([]),\n// jsonstringifyRzl(false),\n// jsonstringifyRzl({name: '任志量', age: '26', info: {school: 'ceedd', father: 'sdfsdf'}})\n// )\n// // JSON.parse实现\n// console.log(\n//     JsonParseEvalRzl('{ \"age\": 20, \"name\": \"jack\" }'),\n//     JsonParseFunctionRzl('{ \"age\": 20, \"name\": \"jack\" }')\n//     );\n// call apply  bind实现\n// CallRzl;\n// ApplayRzl;\n// BindRzl;\n// let foo = {\n//     value: 23\n// }\n// function bar(name, age){\n//     console.log(name);\n//     console.log(this.value);\n// }\n// bar.callRzl(foo, 'rzl', '12')\n// bar.applyRzl(foo, ['rzl', 12]);\n// bar.bindRzl(foo)('rzl', 12)\n\n// 函数柯里化\n\nfunction test (a, b, c) {\n    return a + b + c;\n}\nconst curringTag = Object(_module_currying_modul_js__WEBPACK_IMPORTED_MODULE_3__[\"curry\"])(test)\nconsole.log(curringTag(2)(46, 3));\nconst es6CurryTag = Object(_module_currying_modul_js__WEBPACK_IMPORTED_MODULE_3__[\"es6Curry\"])((a,b,c) => a+b+c);\nconsole.log(es6CurryTag(1,2)(2))\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.module.js?");

/***/ }),

/***/ "./module/JSON.module.js":
/*!*******************************!*\
  !*** ./module/JSON.module.js ***!
  \*******************************/
/*! exports provided: jsonstringifyRzl, JsonParseEvalRzl, JsonParseFunctionRzl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsonstringifyRzl\", function() { return jsonstringifyRzl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JsonParseEvalRzl\", function() { return JsonParseEvalRzl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JsonParseFunctionRzl\", function() { return JsonParseFunctionRzl; });\n/**\n * 实现JSON.stringify\n * boolean | string | number 自动转化为原始值，undefined, 任意函数以及symbol会被忽略，或者被转换成null\n * 不可枚举属性被忽略\n * 对象属性通过某种间接的方式指挥本身，循环引用会被忽略\n */\n\n function jsonstringifyRzl(obj) {\n        let type = typeof obj;\n        if(type !== 'object'){\n            if(/string|undefined|function/.test(type)){\n                obj = `\"${obj}\"`\n            }\n            return String(obj);\n        }else {\n            let json = [];\n            let arr = Array.isArray(obj);\n            for( let key in obj ) {\n                let  value = obj[key];\n                let  nextType = typeof value;\n                if(/string|undefined|function/.test(nextType)) {\n                    value = `\"${value}\"`\n                }else if (nextType === 'object') {\n                    value = jsonstringifyRzl(value) \n                }\n                json.push((arr?'':`'${key}:'`) + String(value))\n            }\n            return (arr?'[':'{') + String(json) + (arr?']':'}')\n        }\n }\n\n /**\n  * 实现JSON.parse\n  * 用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。\n  * 提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。\n  * way1: 不建议使用eval函数，eval函数非常危险， 他执行的代码拥有着执行者的权利，可能造成XSS漏洞，因此需校验\n  * way2: Function()\n  * way3, way4。繁琐递归及状态机相关原理。 \n  */\n// way1\nfunction JsonParseEvalRzl(jsonstr) {\n    const rpq_one = /^[\\],:{}\\s]*$/;\n    const rpq_two = /\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;\n    const rpq_three = /\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;\n    const rpq_four = /(?:^|:|,)(?:\\s*\\[)+/g;\n    if(\n        rpq_one.test(jsonstr\n            .replace(rpq_two, \"@\")\n            .replace(rpq_three, \"]\")\n            .replace(rpq_four, \"\"))   \n    ) {\n        return eval(`(${jsonstr})`)  \n    }\n        return '非法json字符串'\n}\n// way2\nfunction JsonParseFunctionRzl(jsonstr){\n    const obj =  (new Function(`return${jsonstr}`))()\n    return obj;\n}\n\n \n\n//# sourceURL=webpack:///./module/JSON.module.js?");

/***/ }),

/***/ "./module/call-apply-bind.module.js":
/*!******************************************!*\
  !*** ./module/call-apply-bind.module.js ***!
  \******************************************/
/*! exports provided: CallRzl, ApplayRzl, BindRzl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CallRzl\", function() { return CallRzl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApplayRzl\", function() { return ApplayRzl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BindRzl\", function() { return BindRzl; });\n\n/**\n * call 函数\n * 将函数设为对象的属性,\n * 执行&删除这个函数,\n * 指定this到函数并传入给定参数执行函数,\n * 如果不传入参数，默认指向为 window\n */\nconst CallRzl = (function(){\n    Function.prototype.callRzl = function (protoRzl = window) {\n        protoRzl.fn = this;\n        let args = [...arguments].slice(1);\n        let result = protoRzl.fn(...args);\n        delete protoRzl.fn;\n        return result;\n     }  \n})();\n\n/**\n * apply 函数\n * 类似call 传递参数不同\n */\nconst ApplayRzl = (function(){\n    Function.prototype.applyRzl = function(protoRzl = window) {\n        protoRzl.fn = this;\n        let result; \n        if(arguments[1]){\n           result = protoRzl.fn(...arguments[1]) \n        } else {\n           result = protoRzl.fn();   \n        }\n        delete protoRzl.fn;\n        return result;\n    }\n})()\n/**\n * bind 函数\n * 创建一个新函数\n * bind不是一个立即执行函数,\n * 实现需要考虑对原型链的影响\n */\nconst BindRzl = function(){\n    Function.prototype.bindRzl = function(protoRzl){\n        if(typeof this  !== 'function'){\n            return '不是一个函数'\n        }\n        let fn = this;\n        let args = Array.prototype.slice(arguments, 1);\n        let resFn = function() {\n            return fn.apply(this instanceof resFn?this:protoRzl, args.concat(...arguments))\n        }\n        function temp (){};\n        temp.prototype  = this.prototype;\n        resFn.prototype =  new temp();\n        return resFn;\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./module/call-apply-bind.module.js?");

/***/ }),

/***/ "./module/currying.modul.js":
/*!**********************************!*\
  !*** ./module/currying.modul.js ***!
  \**********************************/
/*! exports provided: curry, es6Curry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return curry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"es6Curry\", function() { return es6Curry; });\n/**\n * 函数柯里化\n * 特点： 参数复用、提前返回和延迟执行\n * 实现：是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，\n * 并且返回接受余下的参数且返回结果的新函数的技术\n */\n// 原生写法\nfunction curry(fn, arg) {\n    const length = fn.length;\n    const args = arg || [];\n    return function () {\n        const newArgs = args.concat(Array.prototype.slice.call(arguments));\n        if (newArgs.length < length) {\n            return curry.call(this, fn, newArgs)\n        } else {\n            return fn.apply(this, newArgs);\n        }\n    }\n}\n// es6 写法\nconst es6Curry =(fn,arr=[])=>(... args)=>(\n        arg=>arg.length===fn.length?fn(...arg):es6Curry(fn, arg)\n        )([...arr,...args])\n        \n\n\n\n//# sourceURL=webpack:///./module/currying.modul.js?");

/***/ }),

/***/ "./module/new.module.js":
/*!******************************!*\
  !*** ./module/new.module.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * 实现new 操作符\n * new 操作符实现步骤\n * 创建新对象\n * 他会被执行[[Prototype]]（也就是 __proto__）链接。\n * this 指向新创建对象\n * 通过 new创建的每个对象将最终被 [[Prototype]]链接到这个函数的 prototype对象上\n * 如果函数没有返回对象类型 Object(包含 Functoin,Array,Date,RegExg,Error)，那么 new表达式中的函数调用将返回该对象引用\n */\nfunction newRzl(fun) {\n    const res = {};\n    if(fun.prototype !== null) {\n      res._proto_ = fun.prototype;\n    }\n    const ret = fun.apply(res, Array.prototype.slice.call(arguments, 1));\n    if((typeof ret  === 'object' || typeof ret === 'function')&& ret !== null){\n      return ret;\n    }\n    return res;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newRzl);\n\n//# sourceURL=webpack:///./module/new.module.js?");

/***/ })

/******/ });