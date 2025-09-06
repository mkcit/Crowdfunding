
// http is object containing methods and properties and classes
const http = require('http');

// express is a function
const express = require('express');

// express is a function that returns an object
// app is an object containing methods and properties
const app = express();

// middleware function
// req is request object
// res is response object
// next is a function that calls the next middleware function in the stack
app.use((req, res, next) => {
    console.log(req.url + ' ' + req.method);
    next();
});

app.use((req, res, next) => {
    res.redirect('https://www.google.ps');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

