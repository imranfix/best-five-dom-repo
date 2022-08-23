// common funcition for input field:::
function getInputFieldValueById (inputId){

    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
        inputField.value = '';
        return inputFieldAmount;
}


// common function for text field:::
     function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementAmountString = textElement.innerText;
    const textElementAmount = parseFloat(textElementAmountString);
         return textElementAmount;
 }

// common function for set value:::
function setTextElementValueById (elementId, newValue){

    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


// add (First) event handler for (Calculate) button:::

document.getElementById('btn-calculate').addEventListener('click', function(){

    // get player, manager and coach amount from the input-
    const perPlayerAmount = getInputFieldValueById('player-amount');
    const managerAmount = getInputFieldValueById('manager-amount');
    const coachAmount = getInputFieldValueById('coach-amount');

  

// calcualate total player:::
 const playerManagerCoachTotal = getTextElementValueById('total-amount');

    const cartArryLength = document.getElementById('total-added-player');
    const selectPlayerNumberString = cartArryLength.innerText;
    const selectPlayerNumber = parseInt(selectPlayerNumberString);

    const totalPlayerCost = perPlayerAmount * selectPlayerNumber;
    setTextElementValueById('total-amount', totalPlayerCost);
    return totalPlayerCost;
})


// add (Second) event handler for (Calculate-Total) button:::

document.getElementById('btn-calculate-total').addEventListener('click', function(){

    const managerAmount = getInputFieldValueById('manager-amount');
    const coachAmount = getInputFieldValueById('coach-amount');
    const totalPlayerCost = getTextElementValueById('total-amount');
    const lastTotalAmount = getTextElementValueById('last-total');
  
    const totalCostAmount = totalPlayerCost + managerAmount + coachAmount;
    setTextElementValueById('last-total', totalCostAmount);
})