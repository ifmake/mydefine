

/**xhr兼容版 */
const XHR = function() {
    if (typeof XMLHttpRequest != "undefined"){
        // 正常浏览器
		return new XMLHttpRequest();
	} else if (typeof ActiveXObject != "undefined"){
        // 一般低版本浏览器
		if (typeof arguments.callee.activeXString != "string"){
			var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"], i, len;
			for (i=0,len=versions.length; i < len; i++){
				try {
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				} catch (ex){
                    console.log('XHR错误',ex);
					//跳过
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	} else {
		throw new Error("No XHR object available.");
	}
}
/** 原生ajax请求 */
function ajax (way, url, data) {
    const XHR = new XHR();
    XHR.onreadystatechange = function() {
        if(XHR.readystate === 4) {
            if((XHR.status >= 200 && XHR.status < 300) || XHR.status === 304) {
                return XHR.responseText;
            }else {
                throw new Error(XHR.status)
            }
        }
    }
    XHR.open(way,url,true);
    if (way.toLowerCase() === 'get'){
        XHR.send(null);
    }else {
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(formatParams(data));
    }

}

/**
 * promise Ajax请求
 * 优势： 通过promise 异步回掉，对ajax进行进异步封装，使用方便，请求统一管理
 * 缺点： 单页应用 resolve 需进行try/catch处理，特别是操作DOM时，否则接口响应慢的时，导致报错、页面卡死、竟态条件等情况
 */
function PromiseAjax(way, url, data) {
    const XHR = new XHR();
    return new Promise((resolve, reject) => {
        XHR.ontimeout = () =>{
            reject&& reject('请求超时')
        }
        XHR.onerror = (err) =>{
            reject&& reject(err)
        }
        XHR.onreadystatechange = () =>  {
            if(XHR.readystate === 4) {
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status === 304) {
                    resolve(JSON.parse(XHR.responseText));
                }else {
                    reject && reject(XHR.status)
                }
            }
        }
        XHR.open(way,url,true);
        if (way.toLowerCase() === 'get'){
            XHR.send(null);
        }else {
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(formatParams(data));
        }  

    })
}

/**
 * 观察则模式 Ajax请求
 * 特点： rxjs 对数据流的函数式编程，强大的操作符，使开发者能以同步编程的方式处理，在串并行调用接口时，先利用操作符将数据来源进行处理，然后订阅即可
 */
function RxjsAjax(way,url,data){
    const XHR = new XHR();
    return Observable.create(observer => {
        XHR.ontimeout = () =>{
            observer.error('请求超时')
        }
        XHR.onerror = (err) =>{
            observer.error(err)
        }
        XHR.open(way,url,true)
        if (way.toLowerCase() === 'get'){
            XHR.send(null);
        }else {
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(formatParams(data));
        } 
        XHR.onreadystatechange = () =>  {
            if(XHR.readystate === 4) {
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status === 304) {
                    observer.next(JSON.parse(XHR.responseText));
                    observer.complete();
                }else {
                    observer.error(XHR.status)
                }
            }
        }

    })
}

export default {
    XHR,
    ajax,
    RxjsAjax,
    PromiseAjax
}
