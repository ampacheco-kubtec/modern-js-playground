const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
   
    const {url, method} = req; 
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="Submit">Send</button></form></body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        
        const body = [];

        req.on('data', chunk=>{
            console.log(chunk);
            body.push(chunk);
        });
        
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);

            const message = parseBody.split('=')[1];
            fs.writeFileSync('./message.txt', message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('  <head><title></title></head>');
            res.write('  <body>');
            res.write('     <h1>Data captured</h1>');
            res.write('  </body>');
            res.write('</html>');
});
server.listen(3000);