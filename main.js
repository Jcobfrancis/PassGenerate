const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["@", "#", "$", "%", "?", "=", "&", "+", ".", "!"];
const result = document.querySelector('#result');
const passwordLength = document.querySelector('#password-length');
const lengthResult = document.querySelector('#length-result');
const numberCheckbox = document.querySelector('#numbers-checkbox');
const symbolCheckbox = document.querySelector('#symbols-checkbox');
const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('.copy-btn');

let grabNumbers = [];
let grabSymbols = [];


// Listen for Password length change
passwordLength.addEventListener("change", function() {
  lengthResult.innerText = passwordLength.value;
})

// Copy password to clipboard
copyBtn.addEventListener('click', function()
{
  result.select();
  result.setSelectionRange(0, 12);
  navigator.clipboard.writeText(result.value);
})



// Generate password
generateBtn.addEventListener('click', function() {
  
  let password = [];
  let randomSpot = Math.floor(Math.random() * lengthResult.innerText); 
  
  for (let alphabetLoop = 0; alphabetLoop < lengthResult.innerText; alphabetLoop++) {
    let randomAlphabet = alphabets[Math.floor(Math.random() * (alphabets.length - 1))];
    password.push(randomAlphabet);
    }
  
  if (numberCheckbox.checked) {
    for (let i = 0; i < 2; i++) {
      password.pop();
    }
    password.splice(randomSpot,0,pickNumber());
    if (symbolCheckbox.checked) {
      password.splice(randomSpot,0,pickSymbol());
      }
  } else if (symbolCheckbox.checked) {
      password.pop()
      password.splice(randomSpot,0,pickSymbol())
  }
  
  result.value = password.join('');
}) 

// Function to Generate random numbers 
function pickNumber() {
  for (let numberLoop = 0; numberLoop < 2; numberLoop++) {
    let randomNumber = Math.floor(Math.random() * 10);
      grabNumbers.push(randomNumber);
    }
    let loadNumbers = grabNumbers.join('');
    grabNumbers = [];
    return loadNumbers;
}


//Function to pick random symbols from array
function pickSymbol() {
      let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      grabSymbols.push(randomSymbol);
    let loadSymbols = grabSymbols.join('');
    grabSymbols = []
    return loadSymbols;
}

