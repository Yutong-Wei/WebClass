// Task 1: Hello World
alert("Hello World!");
console.log("My first JavaScript assignment");
document.getElementById("output").innerHTML =
  "I just modified this element with JavaScript";

// Task 2: Variable Practice
let yourName = "Yutong";
let yourAge = "20";
let yourNumber = "3.1415926";
console.log(
  `My name is ${yourName}, I am ${yourAge} years old, and my favorite number is ${yourNumber}.`
);

// Task 3: Calculator Function
function calculate(a, b) {
  let sum = a + b;
  let subtraction = a - b;
  let multiplication = a * b;
  let division = a / b;
  console.log(a + " + " + b + " = " + sum);
  console.log(a + " - " + b + " = " + subtraction);
  console.log(a + " * " + b + " = " + multiplication);
  console.log(a + " / " + b + " = " + division);
}
calculate(5, 7);
calculate(8, 10);
calculate(17, 4);

// Task 4: Temperature Converter
function celsiusToFahrenheit(F) {
  let C = ((F - 32) * 5) / 9;
  alert("Celsius is: " + C);
}
function fahrenheitToCelsius(C) {
  let F = (C * 9) / 5 + 32;
  alert("Fahrenheit is: " + F);
}

// Task 5: String Manipulation
function stringManipulation(string) {
  let uppercaseString = string.toUpperCase();
  let lengthString = string.length;
  let message =
    "The string in upper case is: " +
    uppercaseString +
    "\nThe number of the characters is: " +
    lengthString;
  alert(message);
}
stringManipulation("the string");

// Task 6: Toggle Switch
let isLightOn = true;
function toggleSwitch() {
  if (isLightOn) {
    isLightOn = false;
    document.getElementById("lightOn").innerHTML = "Light is OFF";
  } else {
    isLightOn = true;
    document.getElementById("lightOn").innerHTML = "Light is ON";
  }
}

// Task 7: Counting Loop
function countByTwo(limit) {
  let output = "";
  for (let i = 0; i <= limit; i += 2) {
    output += i + " ";
  }
  document.getElementById("count").innerHTML = output;
}
