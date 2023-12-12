/*Testing ways to click the button and have the message print */
/*function displayNumber() {
    var displayCase = document.getElementById("display").innerHTML = event.target.innerHTML;
  }
*/
/*multiple prints */
/*
function displayNumber(button) {
    var displayButton = button.innerHTML;
    document.getElementById("display").innerHTML += displayButton;
    value += displayButton;
}
*/
/*
function displayNumber(button){
    var displayButton = button.innerHTML;

    if(displayButton === "&minus;" || displayButton === "&plus;" || displayButton === "&divide;" || displayButton === "&times;"){
        totalNumber(displayButton);
    } else {
        document.getElementById("display").innerHTML += displayButton;
        value += displayButton;
    }
}
*/


/*
var total = 0;
var value = "";

function totalNumber(mathSign) {
    if (value !== "") {
        var numberValue = parseFloat(value);
        if (mathSign === "&minus;") {
            total -= numberValue;
        } else if (mathSign === "&plus;") {
            total += numberValue;
        } else if (mathSign === "&divide;") {
            if (numberValue === 0) {
                alert('Error: Cannot divide by zero!');
            } else {
                total /= numberValue;
            }
        } else if (mathSign === "&times;") {
            total *= numberValue;
        }
    }

    value = "";
    document.getElementById("display").innerHTML = total;
}

function calculateTotal() {
    if (value !== "") {
        total += parseFloat(value);
        value = "";
        document.getElementById("display").innerHTML = total;
    }
}
function clearValue(){
    document.getElementById("display").innerText = '0';
}

*/
/*https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/*/

var curretValue = '';
var operatorValue = '';
var total = 0;
var value = "";

function displayNumber(input) {
    value += input;
    curretValue += input;
    document.getElementById("display").innerText = curretValue;
}

/*having a little problem with the math operator, not letting it display */
function calculateTotal() {
    if (value !== "") {
        var numberValue = parseFloat(value);
        if (operatorValue === "+") {
            total += numberValue;
        } else if (operatorValue === "-") {
            total -= numberValue;
        } else if (operatorValue === "*") {
            total *= numberValue;
        } else if (operatorValue === "/") {
            if (numberValue === 0) {
                alert('Error');
            } else {
                total /= numberValue;
            }
        }
        document.getElementById("display").innerText = curretValue + '=' + roundDecimals(total);
        value = "";
        curretValue = "";
        operatorValue = "";
    }
}

function roundDecimals(number) {
    return parseFloat(number.toFixed(2));
}

function operatorSign(operator) {
    if (!operatorValue) {
        curretValue += operator;
        document.getElementById("display").innerText = curretValue;
        operatorValue = operator;
        if (value !== "") {
            total = parseFloat(value);
            value = "";
        }
    }
}

function clearDisplay() {
    value = "";
    total = 0;
    curretValue = '';
    document.getElementById("display").innerText = "";
}

function backspace() {
    value = value.slice(0, -1);
    curretValue = curretValue.slice(0, -1);
    document.getElementById("display").innerText = curretValue;
}