const billedAmount = document.querySelector("#bill-amount");
const givenAmount = document.querySelector("#cash-given");
const checkButton = document.querySelector(".check-button");
const errorMessage = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function handleFeeCalculations() {
    hideMessage();
    if (billedAmount.value > 0) {
        if (givenAmount.value >= billedAmount.value) {
            const amountToBeReturned = givenAmount.value - billedAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Provided cash should be more than or equal to bill amount");
        }
    } else {
        showMessage("Invalid bill amount");
    }
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerHTML = numberOfNotes;
    }
}

function hideMessage() {
    errorMessage.style.display = 'none';
}

function showMessage(message) {
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'red';
    errorMessage.innerHTML = message;
}

checkButton.addEventListener("click", handleFeeCalculations)