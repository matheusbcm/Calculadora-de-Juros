document.getElementById("calc-button").addEventListener("click", function () {
    const calculationType = document.querySelector('input[name="calculationType"]:checked').value;
    const vatRate = parseFloat(document.querySelector('input[name="vatRate"]:checked').value);
    const netAmount = parseFloat(document.getElementById("netAmount").value);

    if (isNaN(netAmount) || netAmount <= 0) {
        alert("Introduza um montante líquido válido.");
        return;
    }

    let vatAmount, grossAmount;

    if (calculationType === "nettoZuBrutto") {
        vatAmount = (netAmount * vatRate) / 100;
        grossAmount = netAmount + vatAmount;
    } else {
        grossAmount = netAmount / (1 + vatRate / 100);
        vatAmount = netAmount - grossAmount;
    }

    document.getElementById("vatAmount").textContent = `€ ${vatAmount.toFixed(2)}`;
    document.getElementById("grossAmount").textContent = `€ ${grossAmount.toFixed(2)}`;
});
