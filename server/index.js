const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.appendFile('./log.txt',`${Date.now().toLocaleString()} : ${req.url.toString()}\n`,()=>{})
    switch(req.url){
        case '/':
            res.end('This is the home page');
            break;
        case '/about':
            res.end('This is the about page');
            break;
        case '/contact':
            res.end('This is the contact page');
            break;
        default:
            res.end('Error 404 : Not found');
    }
});

server.listen(8000,()=>console.log('Server started'));