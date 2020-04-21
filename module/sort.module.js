/**
 * 冒泡排序
 * O(n2)平方阶排序，稳定
 * 原理: 
 * 1、比较相邻的元素，如果第一个比第二个大就交换他们两个。
 * 2、每对相邻元素做同样的工作，开始第一对到最后一对。
 * 3、针对所有的元素重复以上步骤，除了最后一个
 * 4、持续每次对越来越少的元素重复以上步骤，直到没有任何一对元素需要做比较
 */
    
 function bubbleSort(Arr) {
    if(Arr.length  === 0) return [];
    let SortArr = Arr.slice();
    for (let i = 1; i < SortArr.length; i ++){
        // 设定是否交换标记, true 为有交换
        let flag = true;
        for (let j = 0; j < SortArr.length - i; j ++){
            if(SortArr[j] > SortArr[j + 1]){
                const cur = SortArr[j];
                SortArr[j] = SortArr[j + 1];
                SortArr[j + 1] = cur
                flag = false
            }
        }
        if(flag){
            break;
        }
    }
    return SortArr;
 }
 /**
  * 选择排序
  *  O(n2)平方阶排序，不稳定
  * 原理
  * 1、首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
  * 2、再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。重复以上步骤
  */
 function selectSort(Arr) {
     if(Arr.length === 0) return [];
     let SortArr = Arr.concat();
     for(let i = 0 ; i  < SortArr.length - 1; i ++) {
         let min = i ;
         for(let j = i + 1; j < SortArr.length ; j ++ ){
            if(SortArr[j] < SortArr[min]) {
                min = j
            }
         }
         if(min !== i) {
             const tmp = SortArr[i];
             SortArr[i] = SortArr[min];
             SortArr[min] = tmp
         }
     }
     return SortArr;
 }
 /**
  * 快速排序
  * O(nlogn)阶排序， 不稳定
  * 原理：
  * 1、数据中选择一个元素作为基准
  * 2、小于基准的元素移到基准左边，大于移到右边
  * 3、对基准的左右两自己，不断重复第一步第二部，直到所有子集只剩下一个元素为止。
  * 缺陷：不适用于大数据量，大数据量使用堆排序
  */
 // 1、递归实现
 const fastSort =  function (Arr) {
    if(Arr.length <= 1) {return Arr};
    const pivoteIndex = Math.floor(Arr.length/2);
    const pivot = Arr.splice(pivoteIndex,1)[0];
    const leftArr =[];
    const rightArr = [];
    for (let i = 0; i < Arr.length; i ++) {
        if(Arr[i] < pivot) {
            leftArr.push(Arr[i])
        }else {
            rightArr.push(Arr[i])
        }
    }
    return fastSort(leftArr).concat([pivot], fastSort(rightArr))
}
// 非递归实现
const fastSortNoRecursion = function(Arr) {
    var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
    while (list.length > 0) { // 若list不为空，循环弹出list最后一个数组进行快排
        var now = list.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
        if (now[0] >= now[1]) { // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
            continue;
        }
        var i = now[0], j = now[1], flag = now[0]; // 以下与递归方法相同，请参考上面的递归详解
        while (i < j) {
            while (num[j] >= num[flag] && j > flag) j--;
            if (i >= j) {
                break;
            }
            while (num[i] <= num[flag] && i < j) i++;
            let temp = num[flag];
            num[flag] = num[j];
            num[j] = num[i];
            num[i] = temp;
            flag = i;
        }
        list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
        list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可
}

}

 export {
    bubbleSort, 
    selectSort,
    fastSort,
    fastSortNoRecursion
 }