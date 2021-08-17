// deposit and withdraw Input field function

function getInputValue(inputValue) {

    const inputField = document.getElementById(inputValue);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);

    inputField.value = "";
    return inputAmount;
};


// update deposit and withdraw amount box

function updateInputValue(depositBox, amountBox) {

    const amountField = document.getElementById(depositBox);
    const amountFieldText = amountField.innerText;
    const amount = parseFloat(amountFieldText);

    amountField.innerText = amount + amountBox;

};

// adding and updating balance box

function updateBalance(amount, add) {
    const balanceField = document.getElementById("balance-total");
    const balanceFieldText = balanceField.innerText;

    const balanceAmount = parseFloat(balanceFieldText);

    if (add == true) {
        balanceField.innerText = balanceAmount + amount;
    } else {
        balanceField.innerText = balanceAmount - amount;
    }

}






// for deposit

document.getElementById("submit-deposit").addEventListener("click", function () {


    const depositAmount = getInputValue("deposit-amount");

    if (depositAmount > 0) {

        updateInputValue("deposit-total", depositAmount);

        updateBalance(depositAmount, true);
    }




})


// for withdraw

document.getElementById("submit-withdraw").addEventListener("click", function () {


    const withdrawAmount = getInputValue("withdraw-amount");

    if (withdrawAmount > 0) {
        updateInputValue("withdraw-total", withdrawAmount);

        updateBalance(withdrawAmount, false);

    }


})