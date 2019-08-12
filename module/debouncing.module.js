

/**
 * 防抖函数
 * @param {*} fn  // 饭都回调
 * @param {*} wait // 限频时长
 * @param {*} immediate // 
 * 当一次事件发生后，事件处理器要等一定阈值的时间，如果这段时间过去后 再也没有 事件发生，
 * 就处理最后一次发生的事件。假设还差 0.01 秒就到达指定时间，
 * 这时又来了一个事件，那么之前的等待作废，需要重新再等待指定时间。
 */
 function debounceRzl(fn, wait = 50 , immediate) {
    let timer; 
    return function() {
        if(immediate){
            fn.apply(this, arguments);
        }
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        },wait)
    }
 }

 /**
  * 节流函数实现
  * 可以理解为事件在一个管道中传输，加上这个节流阀以后，事件的流速就会减慢。实际上这个函数的作用就是如此，
  * 它可以将一个函数的调用频率限制在一定阈值内，例如 1s，那么 1s 内这个函数一定不会被调用两次
  */
 function throttleRzl(fn , wait = 0){
        let cur = new Date();
        return function(){
            const now = new Date();
            if(now - cur > wait){
                fn.apply(this, arguments);
                cur = new Date();
            }
        }
  }
  /**
   * 限频节流切换
   * @param {回调函数} fn 
   * @param {等待时长} delay 
   * @param {模式切换} isDebounce 
   */
  function throttleChangeDebounce(fn,delay, isDebounce) {
    let timer;
    let lastCall = 0;
    return function(...args) {
        if(isDebounce){
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
              fn(...args)
            },delay)
        }else {
            const cur = new Date().getTime();
            if(cur - lastCall < delay) return;
            lastCall = cur;
            fn(...args)
        }
    }
  }


 export {
    debounceRzl,
    throttleRzl,
    throttleChangeDebounce
 }