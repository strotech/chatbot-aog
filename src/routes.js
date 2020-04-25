var express=require('express');
var router = express.Router();

var fulfillment= require('./fulfillment.js');
const logger=require('src/helpers/logger')

    
router.get('/',function(request,response){
    response.send('Server is up and running');
});

router.route('/calculator').post(fulfillment.calculatorFulfillment);


// eslint-disable-next-line no-unused-vars
router.get('/debug-error',  function mainHandler(req, res) {    
    try {
        throw new Error(`Stackdriver test error`)

    } catch (error) {
        logger(error, { query: req.query }, req).then(() => {
            res.status(500).send('An error occurred.')
        })
    }
});


module.exports = router;

