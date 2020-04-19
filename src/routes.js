var express=require('express');
var router = express.Router();

var fulfillment= require('./fulfillment.js');

    
router.get('/',function(request,response){
    response.send('Server is up and running');
});

router.route('/calculator').post(fulfillment.calculatorFulfillment);


module.exports = router;

