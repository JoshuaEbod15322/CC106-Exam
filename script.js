function add() {
    let wallet = parseFloat(document.getElementById('amount').value);
    const num1 = parseFloat(document.getElementById('itm1').value);
    const num2 = parseFloat(document.getElementById('itm2').value);
    
    let groceryTotal = (num1 * 100) + (num2 * 50);

    document.getElementById('result1').textContent = wallet;
    document.getElementById('result').textContent = groceryTotal;
    document.getElementById('remain').textContent = wallet - groceryTotal;
}
