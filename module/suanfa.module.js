
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


    /**
     * 红包算法
     * Account：总钱
     * total：总个数
     */
    // 获取指定范围的随机数
    function randomFrom(lowerValue,upperValue){
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    }

    //二倍均值法
    
    function redPacket(Account, total) {
        const List = [];
        if(Account <=0 || total<=0){
            throw new Error('金额和总数不能为空')
        }
        if(total === 1) {
            List[0] = Account;
            return List;
        }
        for(let i = total; i>1; --i){
            const upValue = (Account << 1) / i; 
            const Value = randomFrom(1,upValue);
            List.push(Value);
            Account -= Value;
        }
        List.push(Account);
        return List;
    }
    // 线段分割法
    function redPacketLine(Account,total) {
        const List = [];
        if(Account <=0 || total<=0){
            throw new Error('金额和总数不能为空')
        }
        if(total === 1) {
            List[0] = Account;
            return List;
        }
        let Num = total;
        while(Num > 1) {
            const random = randomFrom(1,Account);
            List.push(random);
            Account -= random;
            -- Num;
        }
        return List;
    }

    /**
     * 洗牌算法
     * 保证随机数出现的公平性，每个出现的概率都为5分之一
     *  */ 
    
    function shuffleCards(Arr){
        if(Arr.length > 1) {
            for (let i = Arr.length - 1; i >=0; i --){
                const random = randomFrom(0,i);
                [Arr[i], Arr[random]] = [Arr[random],Arr[i]]
            }
        }
    }