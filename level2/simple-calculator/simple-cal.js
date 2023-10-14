// JavaScript for calculator operations
function add() {
    const num1 = parseFloat(document.getElementById("add-num1").value);
    const num2 = parseFloat(document.getElementById("add-num2").value);
    const result = num1 + num2;
    document.getElementById("add-result").textContent = "Result: " + result;
}

function subtract() {
    const num1 = parseFloat(document.getElementById("sub-num1").value);
    const num2 = parseFloat(document.getElementById("sub-num2").value);
    const result = num1 - num2;
    document.getElementById("sub-result").textContent = "Result: " + result;
}

function multiply() {
    const num1 = parseFloat(document.getElementById("mul-num1").value);
    const num2 = parseFloat(document.getElementById("mul-num2").value);
    const result = num1 * num2;
    document.getElementById("mul-result").textContent = "Result: " + result;
}
