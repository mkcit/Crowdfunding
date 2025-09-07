const express = require('express');
const adminRoutes = express.Router();

//#region Admin Pages
// projects page
adminRoutes.get('/projects', (req, res, next) => {
    console.log('It is projects page');
});
//#endregion
module.exports = adminRoutes;   
