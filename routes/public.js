const express = require('express');
const publicRoutes = express.Router();

//#region Public Pages
// projects page
publicRoutes.get('/projects', (req, res, next) => {
    console.log('It is projects page');
});

// project-details page
publicRoutes.get('/project-details', (req, res, next) => {
    console.log('It is project-details page');
});

// register page
publicRoutes.get('/register', (req, res, next) => {
    console.log('It is register page');
});

// login page
publicRoutes.get('/login', (req, res, next) => {
    console.log('It is register page');
});

// home page
publicRoutes.get('/home', (req, res, next) => {
    console.log('It is home page');
});

// Default home page
publicRoutes.use((req, res, next) => {
    console.log('It is home page');
    // res.render('Home', (err, html) => {
    //     if (!err)
    //         console.log(html);
    // });
});

//#endregion


// This module returns object which contains a group of fnctions,
module.exports = publicRoutes;