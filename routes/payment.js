const express = require('express');
const paymentRoutes = express.Router();

const paymentController = require('../controllers/paymentController');

paymentRoutes.get('/get-payment', paymentController.getPayment);

paymentRoutes.get('/post-payment', paymentController.postPayment);

//(Success / Failure Page)
// app.get('/payment', (req, res, next) => {
//     console.log('It is payment page');
// });

//#endregion

module.exports = paymentRoutes;