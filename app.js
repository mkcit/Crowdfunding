
// http is object containing methods and properties and classes
const http = require('http');

// path is object containing methods and properties and classes
const path = require('path');

// rootDir is a string containing the path of the main module
const rootDir = require('./util/path');

// express is a function object
const express = require('express');

const bodyParser = require('body-parser');

// express is a function object that returns an object
// app is an object containing methods and properties
const app = express();

// middleware function
// req is request object
// res is response object
// next is a function that calls the next middleware function in the stack
app.use((req, res, next) => {
    next();
});

const paymentRoutes = require('./routes/payment');
app.use('/payment', paymentRoutes);

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const publicRoutes = require('./routes/public');
app.use(publicRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'public', '404.html'));
});

// listening in port 3000
app.listen(3000, () => {
    console.log('-----------------------------------------------');
    console.log('You are most welcome in my Crowdfunding system ');
    console.log('         Server is running at port 3000        ');
    console.log('----------------------------------------------');
});

