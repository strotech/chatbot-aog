exports.addAndSubtract = function(req, res) {
    var firstNum;
    var secondNum;
    var result;

    if (req.body.queryResult.intent.displayName == "fb_add") {
        firstNum=req.body.queryResult.parameters.firstnumber;
        secondNum=req.body.queryResult.parameters.secondnumber;

        result=firstNum+secondNum

        return res.json({
            "fulfillmentText": "Addition result is " + result.toString(),
            "displayText": 'Addition result is '+ result.toString(),
            "source": 'na'
        });
    }
    

    if (req.body.queryResult.intent.displayName == "fb_subtract") {
        firstNum=req.body.queryResult.parameters.firstnumber;
        secondNum=req.body.queryResult.parameters.secondnumber;

        result=firstNum-secondNum
        

        return res.json({
            "fulfillmentText": 'Subtraction result is '+ result.toString(),
            "displayText": 'Subtraction result is '+ result.toString(),
            "source": 'na'
        });
    }
}