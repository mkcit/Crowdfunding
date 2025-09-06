
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
    console.log('It is starting middleware');
    next();
});
// -------------- User Pages --------------- //
// dashboard page
app.get('/dashboard', (req, res, next) => {
    console.log('It is dashboard page');
});
// create project page
app.get('/create-project', (req, res, next) => {
    console.log('It is creating-project page');
});
// dashboard page
app.get('/edit-project', (req, res, next) => {
    console.log('It is editing project page');
});

// -------------- Payments Page --------------- //
// projects page
app.get('/projects', (req, res, next) => {
    console.log('It is projects page');
});

// -------------- Admin Pages --------------- //
// projects page
app.get('/projects', (req, res, next) => {
    console.log('It is projects page');
});

// -------------- Public Pages --------------- //
// projects page
app.get('/projects', (req, res, next) => {
    console.log('It is projects page');
});

// project-details page
app.get('/project-details', (req, res, next) => {
    console.log('It is project-details page');
});

// register page
app.get('/register', (req, res, next) => {
    console.log('It is register page');
});

// login page
app.get('/login', (req, res, next) => {
    console.log('It is register page');
});

// home page
app.get('/home', (req, res, next) => {
    console.log('It is home page');
});

// Default home page
app.use((req, res, next) => {
    console.log('It is home page');
});

// listening in port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

