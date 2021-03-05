var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain;charset=utf-8" // 输出类型
    });
    response.write("Hello")// 页面输出
    response.end()
}).listen(3000); // 监听端口号
console.log("Server running at http://localhost:3000");