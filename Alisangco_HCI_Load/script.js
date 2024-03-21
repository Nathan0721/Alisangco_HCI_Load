function submitTransaction(event) {
    event.preventDefault();

    let recipientPhoneNumber = document.getElementById("their-phone-no").value;
    let transferAmount = parseFloat(document.getElementById("transfer-amount").value);
    let initialBalance = 10000.00;
    let currentDeduction = parseFloat(document.getElementById("deduction").textContent.slice(1) || "0");
    let newDeduction = currentDeduction + transferAmount;
    let totalBalance = initialBalance - newDeduction;
    let totalAmountReceived = parseFloat(document.getElementById("total-amount-received").textContent.slice(1) || "0");
    totalAmountReceived += transferAmount;

    if (totalBalance >= 0) {
        document.getElementById("amount-received").textContent = "₱" + transferAmount.toFixed(2);
        document.getElementById("deduction").textContent = "₱" + newDeduction.toFixed(2);
        document.getElementById("total-balance").textContent = "₱" + totalBalance.toFixed(2);
        document.getElementById("total-amount-received").textContent = "₱" + totalAmountReceived.toFixed(2);
        document.getElementById("their-phone-no-output").textContent = recipientPhoneNumber;
    } else {
        alert("Stop! You're Bankrupt!");
    }
}

document.querySelector('form').addEventListener('submit', submitTransaction);
