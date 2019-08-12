/**Map 数据结构 */
function  Map() {
    const Items = {};
    this.has = function(key) {
        return key in Items;
    }
    this.set = function (key,value) {
        Items[key] = value
    }
    this.get = function(key) {
        return this.has(key)?Items[key]:undefined;
    }
    this.remove = function(key){
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    this.clear = function(){
        items = {};
    },
    this.size = function() {
        return Object.Keys(items).length;
    },
    this.getItems = function(){
        return items;
    }
    // 以数组形式返回所有的值
    this.values = function(){
        var values = [];
        for(var k in items){
            if (this.hasOwnProperty(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }
}

/**
 * Set类 数据结构
 */
function Set() {
    const Items = {};
    this.has = function(key) {
        return key in Items;
    }
    this.add = function (value) {
       if(this.has(value)){
        Items[value]=value;
        return true
       }
       return false;
    }
    this.remove = function(key){
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    this.clear = function(){
        items = {};
    },
    this.size = function() {
        return Object.Keys(items).length;
    }
    this.values = function(){
        var values = [];
        for(var k in items){
            if (this.hasOwnProperty(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }
    // 并集操作
    this.union = function(otherSet) {
        const unionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i ++ ){
            unionSet.add(values[i])
        }
        values = otherSet.values;
        for (let i = 0; i < values.length; i ++ ){
            unionSet.add(values[i])
        }
        return values;
    }
    // 交集操作
    this.intersection = function (otherSet) {
        const values = this.values();
        const interValues = [];
        for(let i = 0; i < values.length; i ++ ){ 
            if(otherSet.has(values[i])){
                interValues[values[i]]
            }
        }
        return interValues;
    }
    // 差集
    this.difference = function(otherSet){
        var difference = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                difference.add(values[i]);
            }
        }
        return difference;
    }

}