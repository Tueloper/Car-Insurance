//variables
const year = document.getElementById('year');
const form = document.querySelector('.request-quote');
const make = document.querySelector('.make');
const level = document.querySelector('input[name="level"]:checked');
const errorRef = document.querySelector('.form-group');
const  showYear = new INIT();
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

    console.log(makeValue, yearValue, levelValue)
  });

};

//functions
function INIT() {};

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



