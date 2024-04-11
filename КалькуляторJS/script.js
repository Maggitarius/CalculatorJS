let displayValue = '';
let calculationHistory = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = String(result);
        document.getElementById('display').value = displayValue;
        calculationHistory.push(displayValue + ' = ' + result);
        updateHistory();
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculatePower() {
    appendToDisplay('**');
}

function calculateSqrt() {
    const result = Math.sqrt(eval(displayValue));
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    calculationHistory.push('sqrt(' + displayValue + ') = ' + result);
    updateHistory();
}

function calculatePercentage() {
    const result = eval(displayValue) / 100;
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    calculationHistory.push(displayValue + '% = ' + result);
    updateHistory();
}

function calculateSin() {
    const result = Math.sin(eval(displayValue));
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    calculationHistory.push('sin(' + displayValue + ') = ' + result);
    updateHistory();
}

function calculateCos() {
    const result = Math.cos(eval(displayValue));
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    calculationHistory.push('cos(' + displayValue + ') = ' + result);
    updateHistory();
}

function calculateTan() {
    const result = Math.tan(eval(displayValue));
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    calculationHistory.push('tan(' + displayValue + ') = ' + result);
    updateHistory();
}

function calculateLog() {
    const result = Math.log10(eval(displayValue));
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
    calculationHistory.push('log(' + displayValue + ') = ' + result);
    updateHistory();
}

function calculateE() {
    displayValue += Math.E;
    document.getElementById('display').value = displayValue;
}

function calculatePi() {
    displayValue += Math.PI;
    document.getElementById('display').value = displayValue;
}

function updateHistory() {
    document.getElementById('history').innerHTML = calculationHistory.join('<br>');
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}