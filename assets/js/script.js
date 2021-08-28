// TODO: Declare any global variables we need
let numOfHeads = 0;
let numOfTails = 0;
let totalNumOfFlips = numOfHeads + numOfTails;

const heads = 1;
const tails = 0;

let percentofHeads = 0;
let percentofTails = 0;


document.addEventListener('DOMContentLoaded', function () {
    

    // TODO: Add event listener and handler for flip and clear buttons

    //TODO: get the buttons

  const flipButton = document.querySelector('#flip');
  const clearButton = document.querySelector('#clear');
  const pennyImage = document.querySelector('.penny-image');
  const status = document.querySelector('#message')
  const headsDisplay = document.querySelector('#heads')
  const tailsDisplay = document.querySelector('#tails')
  const headsPercentageDisplay = document.querySelector('#heads-percent')
  const tailsPercentageDisplay = document.querySelector('#tails-percent')
  
  
flipButton.addEventListener('click', function(){

    const outcome = Math.round(Math.random());
    console.log('outcome', outcome);



if(outcome===heads){

    pennyImage.setAttribute('src', '/assets/images/penny-heads.jpg');
    status.textContent = 'You flipped heads';
    numOfHeads++;
    headsDisplay.textContent = numOfHeads;
} 
else {

    pennyImage.setAttribute('src', '/assets/images/penny-tails.jpg');
    status.textContent = 'You flipped tails';
    numOfTails++;
    tailsDisplay.textContent = numOfTails;
}

console.log('heads count', numOfHeads);
console.log('tails count', numOfTails);
totalNumOfFlips = (numOfTails + numOfHeads);
percentOfHeads = Math.round((numOfHeads / totalNumOfFlips) * 100)
percentOfTails = Math.round((numOfTails / totalNumOfFlips) * 100)
console.log('total count', totalNumOfFlips);

headsPercentageDisplay.textContent = percentOfHeads
tailsPercentageDisplay.textContent = percentOfTails

})
clearButton.addEventListener('click', function(){

    //window.location.reload();

numOfHeads = 0;
headsDisplay.textContent = numOfHeads
numOfTails = 0;
tailsDisplay.textContent = numOfTails;
percentofTails = 0;
tailsPercentageDisplay.textContent = percentofTails;
percentofHeads = 0;
headsPercentageDisplay.textContent = percentofHeads;
totalNumOfFlips = 0;

status.textContent = "Let's get rolling";


})



}
)