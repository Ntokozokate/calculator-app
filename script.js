//There are three functions to create tht we already called in html that is 1)appendToDisplay 2)clearDisplay 3) calculate

let desk = document.getElementById("desk");
let memory = 0;

function appendToDisplay(input) {
  desk.value += input;
}

function clearDisplay() {
  desk.value = "";
}
function calculate() {
  try {
    desk.value = eval(desk.value);
  } catch (error) {
    desk.value = "Oops..";
    console.log(desk.value);
  }
}
function calculatePercentage() {
  try {
    desk.value = eval(desk.value) / 100;
  } catch (error) {
    desk.value = "Oops..";
  }
}
function plusOrMinus() {
  if (desk.value) {
    desk.value = parseFloat(desk.value) * -1;
  }
}
function clearMemory() {
  memory = 0;
}
function recallMemory() {
  desk.value += memory;
}
function addMemory() {
  if (desk.vlaue) {
    memory - +parseFloat(desk.value);
  }
}
function subtractMemory() {
  if (desk.value) {
    memory -= parseFloat(desk.value);
  }
}
//https://kate-nm-currency-converter.netlify.app/
//https://kate-nm-calculator-app.netlify.app/
