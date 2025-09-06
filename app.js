
// http is object containing methods and properties and classes
const http = require('http');

// createServer is a method of http object
// server is an instance of http.Server class (object)
const server = http.createServer((req, res) => {
    
});

const PORT = 3000;
server.listen(PORT);
console.log('Listening on port 3000');
