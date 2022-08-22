// common funcition for input field::
function getInputFieldValueById (inputId){

    const inputField = document.getElementById(inputId);
    const inputFieldAmountString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
        return inputFieldAmount;
}


// common function for text field::
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


// add event handler for Calculate button:::

document.getElementById('btn-calculate').addEventListener('click', function(){

    // get player, manager and coach amount from the input-
    const perPlayerAmount = getInputFieldValueById('player-amount');
    const managerAmount = getInputFieldValueById('manager-amount');
    const coachAmount = getInputFieldValueById('coach-amount');

  

// calcualate total player:::
 const playerManagerCoachTotal = getTextElementValueById('total-amount');
 
    const totalPlayerCost = perPlayerAmount * 6;
    setTextElementValueById('total-amount', totalPlayerCost);
    


})