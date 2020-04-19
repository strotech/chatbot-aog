var calculatorComponent= require('src/components/calculator.js');

exports.calculatorFulfillment = function(req, res) {
    calculatorComponent.addAndSubtract(req, res);
};