//variables
const year = document.getElementById('year');
const form = document.querySelector('#request-quote');
const make = document.querySelector('#make');
const level = document.querySelector('input[name="level"]:checked');
const errorRef = document.querySelector('.form-group');
const showYear = new INIT();
console.log(showYear);

//Event Listeners
eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    showYear.displayYears();
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
      showYear.displayError('All Fields must be filled!!!')
    } else {
      const inssurance = new insurance(makeValue, yearValue, levelValue);
    }
  });
};

//objects
function INIT() {};

function Insurance(make, year, level) {
  this.make = make;
  this.year = year;
  this.level = level
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


