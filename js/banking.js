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
function updateRotalFild(NewDepositAmount, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    const priviousBlanceText = totalBalance.innerText;
    const priviousBlance = parseFloat(priviousBlanceText);
    if (isAdd == true) {
        totalBalance.innerText = priviousBlance + NewDepositAmount;
    }
    else {
        totalBalance.innerText = priviousBlance - NewDepositAmount;
    }
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const NewDepositAmount = getInputValue('deposit-input');
    updateTotalMoney('total-deposite', NewDepositAmount)
    // update balance 
    updateRotalFild(NewDepositAmount, true);
});
// ballence equation
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const newWithdrawInput = getInputValue('Withdraw-input');
    updateTotalMoney('total-withdraw', newWithdrawInput)
    updateRotalFild(newWithdrawInput, false);
});