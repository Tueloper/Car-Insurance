//variables
const year = document.getElementById('year');
const form = document.querySelector('#request-quote');
const make = document.querySelector('#make');
const level = document.querySelector("input[name='level']:checked");
const errorRef = document.querySelector('.form-group');
const htmlDisplay = new INIT();
// console.log(htmlDisplay);

//Event Listeners
eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    htmlDisplay.displayYears();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    //read values
    const makeValue = make.value;
    const yearValue = year.value;
    const levelValue = level.value;

    // console.log(makeValue, yearValue, levelValue)
    //reading if valuses are null
    if (makeValue == '' || yearValue == '' || levelValue == '') {
      //perform another function
      htmlDisplay.displayError('All Fields must be filled!!!')
    } else {
      const insureObj = new INSURANCE(makeValue, yearValue, levelValue);
      // return console.log(insureObj)
      const price = insureObj.calculateQuotation(insureObj);

      htmlDisplay.showQuotes(price, insureObj);
      // console.log(price)
    }
  });
};

//objects
function INIT() {};

function INSURANCE(make, year, level) {
  this.make = make;
  this.year = year;
  this.level = level
}


INSURANCE.prototype.yearsDiff = function (selectedYear) {
  return new Date().getFullYear() - selectedYear;
};


//calculating the price
INSURANCE.prototype.calculateQuotation = function (insure){

  //this calculation is based on the make
  let price;
  
  //set a standard base
  const base = 2000;

  /**
   * 
   * Rules for increment
   * America = 28.5%
   * Asian = 43.8%
   * Europe = 15.8%
   * 
   */
  const make = insure.make;
  switch (make) {
    case '1':
      price = base * 11.5;
      break;
    
    case '2':
      price = base * 67.80;
      break;
    
    case '3':
      price = base * 23.53;
      break;
  
    default:
      break;
  }

  //calculation price including the year as a variable
  const year = insure.year;
  
  //fetching difference in years
  const difference = this.yearsDiff(year);
  // return console.log(difference)

  //difference based on price
  price = price - ((3 * difference) * price) / 100;
  
  //adding the level variable
  const level = insure.level;

  price = this.calculateLevel(price, level)
  
  return price;
}

//calculate level
INSURANCE.prototype.calculateLevel = function (price, level) {
  
  /**
   * SET rules
   * 
   * basic get 1.00
   * Complete pack gets 1.25
   * 
   */

  if (level === 'basic') {
    price = price * 3.78
  } else {
    price = price * 13.25
  }

  return price;
}


//functions
INIT.prototype.displayYears = function () {
  maxYear = new Date().getFullYear();
  minYear = maxYear - 20;
 
  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
};

//display errors
INIT.prototype.displayError = function (message) {
  const errorMessage = document.createElement('div');
  errorMessage.classList = 'error';

  errorMessage.innerHTML = `
    <p>${message}</p>
  `
  form.insertBefore(errorMessage, errorRef)

  //remove the error message
  setTimeout(() => {
    document.querySelector('.error').remove();
  }, 4000)
}

//prototypes are functions or methods of an object, they are set oustisde the object function making use of the class constructor as a prototyle
// make sure to differientiate between functions and methods of a constructor

//displaying result 
INIT.prototype.showQuotes = function ( price, quotes) {
  const results = document.getElementById('result');

  const div = document.createElement('div');

  //converting make to words
  let make = quotes.make

  switch (make) {
    case '1':
      make = 'America'
      break;
    
    case '2':
      make = 'Asian'
      break;
    
    case '3':
      make = 'Europe'
      break;
    
    default:
      break;
  }
  div.innerHTML = `
    <p class="header"> Quote</p>
    <p> Make: ${make}</p>
    <p>Year: ${quotes.year}</p>
    <p>Level: ${quotes.level}</p>
    <p class="total">Total: ${price}</p>
  `;

  results.appendChild(div);
}