const http = require("http");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
//avvio 
dotenv.config();


const server = http.createServer(function (req, res) {
    // specificare 
    res.end(`<h1>Hello World</h1>
    NUMBER: ${process.env.NUMBER}
    `);

})

server.listen(port, function () {
    console.log("server is running on port: " + port)
})