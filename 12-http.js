const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end("Hello");
        return;
    }
    if (req.url === '/about') {
        res.end("Hii")
        return
    }
    res.end(`<h1>Opps</h1><p>!</p>`)
    
})

server.listen(5000)
