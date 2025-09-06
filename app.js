
// http is object containing methods and properties and classes
const http = require('http');

// express is a function returning an object
const express = require('express');

// app is an object containing methods and properties
const app = express();


const PORT = 3000;
app.listen(PORT, () => {
    console.log('Listening on port 4000');
});

