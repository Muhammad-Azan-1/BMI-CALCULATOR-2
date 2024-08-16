let form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = document.querySelector("#weight") as HTMLInputElement;
  const height = document.querySelector("#height") as HTMLInputElement;
  let results = document.querySelector("#results") as HTMLDivElement;

  // Convert the input values from string to number ||||||| paresInt converts string to number like '123' to 123  or '123abc123' to 123 , || but in case of decimals we use paresfloat string '123.45' to number 123.45 we use parseFloat
  
  let weightValue = parseFloat(weight.value); // Converting the weight input to an integer
  let heightValue = parseFloat(height.value); // Converting the height input to a integer

  //The isNaN function returns true if the value is not a number and false if the value is a number.
  //isNaN("123") → false (because "123" can be interpreted as a number)

  if (weightValue <= 0) {
    results.innerHTML = `Please enter a valid weight`;
  } else if (heightValue <= 0) {
    results.innerHTML = `Please enter a valid height`;
  } else {

    // Since 1 meter = 100 centimeters, so 1m^2 is = 100 cm x 100 cm = 10000cm^2

    let bmi = (weightValue / ((heightValue **2)/10000)); // Calculating the BMI
    let bmiToFixed = bmi.toFixed(2);  //Formats a number to a fixed number of decimal places. Returns a string representation of the number,
    // console.log( typeof bmiToFixed) // string

    results.innerHTML = `<span>Your BMI is = ${bmi}</span>`;

    if (bmi <= 18.6) {
      results.innerHTML = `<span>BMI = ${bmiToFixed}</span><br><br><b>Your BMI is underweight. It's important to consult with a healthcare provider for personalized advice.</p>`;
    }  else if (bmi <= 24.9) {
      results.innerHTML = `<span>BMI = ${bmiToFixed}</span><br><br><b> Your BMI is in the overweight range. Consider adopting a healthier lifestyle, including balanced nutrition and regular exercise!</p>`;
    }  else if (bmi > 24.9) {
      results.innerHTML = `<span>BMI = ${bmiToFixed}</span><br><br><b> Your BMI falls in the obesity range. It's advisable to consult with a healthcare provider for personalized advice and support!</p>`;
    }
  }
});
