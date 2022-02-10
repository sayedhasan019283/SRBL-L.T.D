document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const NewDepositAmountText = depositInput.value;
    const NewDepositAmount = parseFloat(NewDepositAmountText);
    // console.log(depositAmount);

    const totalDeposite = document.getElementById('total-deposite');

    const priviousDepositeAmountText = totalDeposite.innerText;
    const priviousDepositeAmount = parseFloat(priviousDepositeAmountText);
    const newDepositeTotal = priviousDepositeAmount + NewDepositAmount;
    totalDeposite.innerText = newDepositeTotal;


    // update balance 
    const totalBalance = document.getElementById('total-balance');
    const priviousBlanceText = totalBalance.innerText;
    const priviousBlance = parseFloat(priviousBlanceText);
    const newBalance = priviousBlance + NewDepositAmount;
    totalBalance.innerText = newBalance


    depositInput.value = '';
});



// ballence equation
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const WithdrawInput = document.getElementById('Withdraw-input');
    const newWithdrawInputText = WithdrawInput.value;
    const newWithdrawInput = parseFloat(newWithdrawInputText);


    const totalWithdraw = document.getElementById('total-withdraw');
    const previousTotalWithdrawText = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawText);
    const newtotalWithdraw = previousTotalWithdraw + newWithdrawInput;
    totalWithdraw.innerText = newtotalWithdraw;


    const totalBalance = document.getElementById('total-balance');
    const priviousTotalBalanceText = totalBalance.innerText;
    const priviousTotalBalance = parseFloat(priviousTotalBalanceText);
    const newTotalBalance = priviousTotalBalance - newWithdrawInput;
    totalBalance.innerText = newTotalBalance;


    WithdrawInput.value = '';
});