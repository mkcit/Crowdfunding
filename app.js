
// http is object containing methods and properties and classes
const http = require('http');

// express is a function object
const express = require('express');

// express is a function object that returns an object
// app is an object containing methods and properties
const app = express();

// middleware function
// req is request object
// res is response object
// next is a function that calls the next middleware function in the stack
app.use((req, res, next) => {
    console.log('It is starting middleware');
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

// listening in port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

