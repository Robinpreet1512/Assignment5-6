// Function to convert CAD to USD
function convertToUSD() {
    const cadInput = document.getElementById('cadInput').value;
    if (!cadInput || cadInput < 0) {
        alert('Please enter a valid amount in CAD.');
        return;
    }
    const rate = 0.79; // Hardcoded conversion rate
    const usdAmount = cadInput * rate;
    document.getElementById('result').innerText = `Converted Amount in USD: $${usdAmount.toFixed(3)}`;
}

// Function to convert USD to CAD
function convertToCAD() {
    const usdInput = document.getElementById('usdInput').value;
    if (!usdInput || usdInput < 0) {
        alert('Please enter a valid amount in USD.');
        return;
    }
    const rate = 1.27; // Hardcoded conversion rate
    const cadAmount = usdInput * rate;
    document.getElementById('result').innerText = `Converted Amount in CAD: $${cadAmount.toFixed(3)}`;
}
