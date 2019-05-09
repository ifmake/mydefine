const http = require('http')
const fs = require('fs')
const rootUrl = '/Users/rzl/Documents/mydefine'
const server = http.createServer((req, res) => {
    const  url = req.url; 
    const  file = rootUrl + url;
    fs.readFile(file, (err, data) => {
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            // res.setHeader({'content-type' : 'text/javascript;charset="utf-8"'})
            res.write(data);//将index.html显示在客户端
            res.end();

        }
    })
}).listen(8081)
console.log('启动服务成功')