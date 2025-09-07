
const express = require('express'); 
const userRoutes = express.Router();

//#region User Pages
// dashboard page
userRoutes.get('/user-dashboard', (req, res, next) => {
    console.log('It is dashboard page');
});
// create project page
userRoutes.get('/create-project', (req, res, next) => {
    console.log('It is creating-project page');
});
// dashboard page
userRoutes.get('/edit-project', (req, res, next) => {
    console.log('It is editing project page');
});
//#endregion

module.exports = userRoutes;