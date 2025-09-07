const express = require('express');
const paymentRoutes = express.Router();
//#region Payments Page
// projects page
paymentRoutes.get('/payment', (req, res, next) => {
    console.log('It is payment page');
});

//(Success / Failure Page)
// app.get('/payment', (req, res, next) => {
//     console.log('It is payment page');
// });

//#endregion

module.exports = paymentRoutes;