
// طريقة أخرى لكتابة 
// Controller

getPayment = function (req, res, next) {
    console.log('GET Payment');
}

postPayment = function (req, res, next) {
    console.log('POST Payment');
}

module.exports = {
    getPayment,
    postPayment
}