const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const publicRoutes = express.Router();
//#region Public Pages
// projects page
publicRoutes.get('/projects', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir,'views','public', 'projects.html'));
});

// project-details page
publicRoutes.get('/project-details', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir,'views','public', 'project-details.html'));
});

// register page
publicRoutes.get('/register', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir,'views','public', 'register.html'));
});

// login page
publicRoutes.get('/login', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir,'views','public', 'login.html'));
});

// home page
publicRoutes.get('/home', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir,'views', 'public','Home.html'));
});

// Default home page
publicRoutes.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir,'views', 'public','Home.html'));
});

//#endregion


// This module returns object which contains a group of fnctions,
module.exports = publicRoutes;