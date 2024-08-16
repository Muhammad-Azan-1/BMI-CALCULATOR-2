var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var weight = document.querySelector("#weight");
    var height = document.querySelector("#height");
    var results = document.querySelector("#results");
    // Convert the input values from string to number ||||||| paresInt converts string to number like '123' to 123  or '123abc123' to 123 , || but in case of decimals we use paresfloat string '123.45' to number 123.45 we use parseFloat
    var weightValue = parseFloat(weight.value); // Converting the weight input to an integer
    var heightValue = parseFloat(height.value); // Converting the height input to a integer
    //The isNaN function returns true if the value is not a number and false if the value is a number.
    //isNaN("123") → false (because "123" can be interpreted as a number)
    if (weightValue <= 0) {
        results.innerHTML = "Please enter a valid weight";
    }
    else if (heightValue <= 0) {
        results.innerHTML = "Please enter a valid height";
    }
    else {
        // Since 1 meter = 100 centimeters, so 1m^2 is = 100 cm x 100 cm = 10000cm^2
        var bmi = (weightValue / ((Math.pow(heightValue, 2)) / 10000)); // Calculating the BMI
        console.log(typeof bmi);
        var bmiToFixed = bmi.toFixed(2);
        console.log(typeof bmiToFixed);
        results.innerHTML = "<span>Your BMI is = ".concat(bmi, "</span>");
        if (bmi <= 18.6) {
            results.innerHTML = "<span>BMI = ".concat(bmiToFixed, "</span><br><br><b>Your BMI is underweight. It's important to consult with a healthcare provider for personalized advice.</p>");
        }
        else if (bmi <= 24.9) {
            results.innerHTML = "<span>BMI = ".concat(bmiToFixed, "</span><br><br><b> Your BMI is in the overweight range. Consider adopting a healthier lifestyle, including balanced nutrition and regular exercise!</p>");
        }
        else if (bmi > 24.9) {
            results.innerHTML = "<span>BMI = ".concat(bmiToFixed, "</span><br><br><b> Your BMI falls in the obesity range. It's advisable to consult with a healthcare provider for personalized advice and support!</p>");
        }
    }
});
