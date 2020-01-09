const title = document.querySelector('.headTitle');
const inputs = document.querySelector('.inputs');
const inputGroup1 = document.querySelector('.input-group1');
const inputGroup2 = document.querySelector('.input-group2');
const inputGroup3 = document.querySelector('.input-group3');
const cigCost = document.querySelector('.cigCost');
const cigAmount = document.querySelector('.cigAmount');
const days = document.querySelector('.days');
const buttonContainer = document.querySelector('.buttons')
const btnCalc = document.querySelector('#buttonCalc')
const btnReset = document.querySelector('#buttonReset')


btnCalc.addEventListener('click', calcCigCost)
btnReset.addEventListener('click', resetV)

function calcCigCost(){
  let price = cigCost.value;
  let amount = cigAmount.value;
  let day = days.value;
  let total = (price/25 * amount) * day;
  let result = document.querySelector('.results');
  result.insertAdjacentHTML("beforeend", `You've saved $${total} so far!`);
  if(days.value >= 10){
    let celeb = document.querySelector('.celebration');
    celeb.insertAdjacentHTML("beforeend", `
    <h3> CONGRATS! </h3>`)
  }else{
    let encour = document.querySelector('.encourage');
    encour.insertAdjacentHTML("beforeend", `
    <h3> KEEP GOING!</h3>`)
  }
  removeE();

}

// Adds event listener back in the reset button function
function addE(){
  document.querySelector('#buttonCalc').addEventListener('click', calcCigCost);
}

// Removes event listener so clicking calculate wont keep working
function removeE(){
  document.querySelector('#buttonCalc').removeEventListener('click',calcCigCost)
}

// resets value of inputs and inserted DOM elements
function resetV(){
  // cigCost.value = ''
  // cigAmount.value = ''
  // days.value = ''
  let inputArray = document.querySelectorAll('input');
  inputArray.forEach(function(input) {
    input.value = '';
  })
  
  document.querySelector('.results').textContent = '';
  document.querySelector('.celebration').textContent = '';
  document.querySelector('.encourage').textContent = '';
  addE();
}

// Try adding an IF days quit > then x something happens to screen

