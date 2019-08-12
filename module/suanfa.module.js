
//  // 常规阶乘递归
//  function testFact(n) {
//         if(n === 1) return 1;
//         return n * testFact(n-1);
//     }
//     console.time('常规阶乘')
//     testFact(10);
//     console.log('1212',   testFact(10))
//     console.timeEnd('常规阶乘')

//     // 阶乘优化 (尾递归优化);
//     function niceFact(n, total = 1) {
//         if(n === 1) return total;
//         return niceFact(n-1,n*total);
//     }
//     console.time('优化阶乘')
//     niceFact(10);
//     console.log('1212',   niceFact(10))
//     console.timeEnd('优化阶乘')
//     // 尾递归实现斐波那契数列
//     // 常规实现
    function febonaqi(n){
        if(n <= 2) {
            return 1;
        }else {
         return  febonaqi(n-1) +  febonaqi(n-2)
        }
    }
//     console.time('动态规划1111')
//     console.log('当前值',febonaqi(10));
//     console.timeEnd('动态规划1111')
//     // 斐波那契动态规划优化
    function niceFebonaqi(n) {
        if(n < 3) return 1;
        let FebonaqiArr = [];
        FebonaqiArr[1] = 1;
        FebonaqiArr[2] = 1;
        for(let i = 3; i <= n; i++){
            FebonaqiArr[i] = FebonaqiArr[i-1] + FebonaqiArr[i-2];
        }
        return FebonaqiArr[n];
    }
//     console.time('动态规划')
//     console.log(niceFebonaqi(10))
//     console.timeEnd('动态规划')