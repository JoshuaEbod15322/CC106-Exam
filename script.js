let wallet = 0;
let num1 = 100;
let num2 = 50;

function add() {

    const wallet = parseFloat(document.getElementById('amount').value);
    const num1 = parseFloat(document.getElementById('itm1').value);
    const num2 = parseFloat(document.getElementById('itm2').value);
    document.getElementById('result1').textContent = wallet;
    document.getElementById('result').textContent = num1 + num2;
    document.getElementById('remain').textContent = num1 * num2 - wallet;
}