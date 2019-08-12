

// 自定义webpack插件
 function exchangUrl(options) {
    this.option = options;
 }  
 
 exchangUrl.prototype.apply = function(complier){
    const cdnPath = this.option.cdnPath;
        complier.plugin('compilation', function(compilation, option) {
            compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlData, callBack) {
                for (let i = 0 ; i <  htmlData.assets.js.length; i ++) {
                    htmlData.assets.js[i] = cdnPath  + htmlData.assets.js[i];
                }
                callBack && callBack(null, htmlData)
            })
        })
 }

 module.exports = exchangUrl;