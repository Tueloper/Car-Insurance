//variables

//Event Listeners
eventListeners();

function eventListeners() {
  document.addEventListener('DOMLoadedContent', () => {

    const showYear = new INIT()
    showYear.displayYears();

  });
};

//functions
function INIT() {};

INIT.prototype.displayYears = function () {
  maxYear = new Date().getFullYear();
  console.log(maxYear)
};

