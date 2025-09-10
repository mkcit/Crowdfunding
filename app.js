
// http is object containing methods and properties and classes
const http = require('http');

// path is object containing methods and properties and classes
const path = require('path');

// rootDir is a string containing the path of the main module
const rootDir = require('./util/path');

// express is a function object
const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/errorController');


// express is a function object that returns an object
// app is an object containing methods and properties
const app = express();

// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// middleware function
// req is request object
// res is response object
// next is a function that calls the next middleware function in the stack
app.use((req, res, next) => {
    // console.log(path.join(rootDir));
    next();
});

// bodyParser is a middleware function that parses the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

// express.static to call static files in public folder
app.use(express.static(path.join(rootDir, 'public')));

const paymentRoutes = require('./routes/payment');
app.use('/payment', paymentRoutes);

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const publicRoutes = require('./routes/public');
app.use(publicRoutes);

app.use(errorController.get404);

// listening in port 3000
app.listen(3000, () => {
    console.log('-----------------');
    console.log('Server is running');
    console.log('-----------------');
});

