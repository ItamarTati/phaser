const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const server = http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile("./index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }

    else if (req.url.match(/\.js$/)) {
        const jsPath = path.join(__dirname, req.url);
        const fileStream = fs.createReadStream(jsPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        fileStream.pipe(res);
    }

    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }
})
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});