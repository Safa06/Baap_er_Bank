//step-1 add event listener in deposit btn

document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2 get the deposit amount from the deposit input field

    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //console.log(depositAmount);

    //step-3 get the current deposit amount
    // eta input na,jeta set kora oita mane input text

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    const previousDepositTotalString= depositTotalElement.innerText;

    const previousDepositTotal=parseFloat(previousDepositTotalString);

    //console.log(typeof previousDepositTotal);

    const currentDepositTotal=previousDepositTotal + newDepositAmount;

    //console.log(typeof currentDepositTotal);

    depositTotalElement.innerText = currentDepositTotal;


    //step-4 clear the deposit field
    depositField.value = '';

    //step-5 Balance section
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6 calculate current balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;




})