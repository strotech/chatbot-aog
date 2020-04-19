var express=require('express');
var router = express.Router();

var fulfillment= require('./fulfillment.js');

    
router.get('/',function(request,response){
    response.send('Server is up and running');
});

router.route('/calculator').post(fulfillment.calculatorFulfillment);

// eslint-disable-next-line no-unused-vars
router.get('/debug-sentry', function mainHandler(req, res) {
    throw new Error('My first Sentry error!');
});


module.exports = router;

