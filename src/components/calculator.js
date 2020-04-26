exports.addAndSubtract = function(req, res) {
    var firstNum;
    var secondNum;
    var result;

    if (req.body.queryResult.intent.displayName == "fb_add") {
        firstNum=req.body.queryResult.parameters.firstnumber;
        secondNum=req.body.queryResult.parameters.secondnumber;

        result=firstNum+secondNum

        return res.json({
            "fulfillmentText": "Sum is " + result.toString()
        });
    }
    

    if (req.body.queryResult.intent.displayName == "fb_subtract") {
        firstNum=req.body.queryResult.parameters.firstnumber;
        secondNum=req.body.queryResult.parameters.secondnumber;

        result=firstNum-secondNum
        

        return res.json({
            "fulfillmentText": 'Difference is '+ result.toString()
        });
    }
}