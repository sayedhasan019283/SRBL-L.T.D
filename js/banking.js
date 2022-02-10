function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const newInputValueText = inputValue.value;
    const NewDepositAmount = parseFloat(newInputValueText);
    inputValue.value = '';
    return NewDepositAmount;
}
function updateTotalMoney(input, addinput) {
    const totalWithdraw = document.getElementById(input);
    const previousTotalWithdrawText = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawText);
    totalWithdraw.innerText = previousTotalWithdraw + addinput;
}
function getCaruntBalance() {
    const totalBalance = document.getElementById('total-balance');
    const priviousBlanceText = totalBalance.innerText;
    const priviousBlance = parseFloat(priviousBlanceText);
    return priviousBlance;
}

function updateRotalFild(NewDepositAmount, isAdd) {
    const totalBalance = document.getElementById('total-balance');

    const priviousBlance = getCaruntBalance();
    if (isAdd == true) {
        totalBalance.innerText = priviousBlance + NewDepositAmount;
    }
    else {
        totalBalance.innerText = priviousBlance - NewDepositAmount;
    }
}
// 
document.getElementById('deposit-button').addEventListener('click', function () {
    const NewDepositAmount = getInputValue('deposit-input');
    if (NewDepositAmount > 0) {
        updateTotalMoney('total-deposite', NewDepositAmount)
        // update balance 
        updateRotalFild(NewDepositAmount, true);
    }
    else if (NewDepositAmount < 0) {
        alert('plz input possitive number')
    }
});
// ballence equation
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const newWithdrawInput = getInputValue('Withdraw-input');
    const currantBalance = getCaruntBalance();
    if (newWithdrawInput > 0 && newWithdrawInput <= currantBalance) {
        updateTotalMoney('total-withdraw', newWithdrawInput)
        updateRotalFild(newWithdrawInput, false);
    }
    else if (newWithdrawInput < 0) {
        alert('plz input possitive number')
    }
});