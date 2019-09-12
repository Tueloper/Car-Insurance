//classes
class BUDGET {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetRemaining = this.budget;
  }

  removeExpensesFromBudget(amount) {
    return this.budgetRemaining -= amount;
  }

  returnAmount(amount) {
    return this.budgetRemaining = this.budgetRemaining + amount;
  }
}

class HTML {

  //here we define the methods for HTML class
  insertBudget(figure) {

    //attach the object to display
    mainBudget.innerHTML = `${figure}`
    budgetLeft.innerHTML = `${figure}`
  }

  printMessage(message, sweetAlert) {

    //create the wrapper
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('text-center', 'alert', sweetAlert);
    messageDiv.appendChild(document.createTextNode(message))

    //insert the message
    document.querySelector('.primary').insertBefore(messageDiv, form)

    //remove the alert
    setTimeout(() => {
      document.querySelector('.primary .alert').remove();
    }, 3000)
  }

  addExpenseToList(name, amount) {
    const expensesList = document.querySelector('#expenses ul');

    //creating li
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
    li.innerHTML = `
      ${name}
      <span class="badge badge-primary badge-pill">$ ${amount}</span>
    `;

    expensesList.appendChild(li);
  }

  trackBudget(amount) {

    //reduce the budget by the inputted amount
    budgetLeftDollares = budgetObj.removeExpensesFromBudget(amount);
    
    //conditional
    if ((budgetObj.budget / budgetObj.budget) > budgetLeftDollares) {
      budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning', 'alert-danger');
      budgetLeft.parentElement.parentElement.classList.add('alert-primary');  
      
      //print error message
      this.printMessage('Warning!!!, You have EXCEEDED your budget, Please try again', 'alert-warning');

      //remove list
      const select = document.querySelector('#expenses ul')
      select.removeChild(select.lastChild)

      //send the transaction back
      const replaceBudget = budgetObj.returnAmount(amount);
      budgetLeft.innerHTML = `${replaceBudget}`

    }else if ((budgetObj.budget / 4) > budgetLeftDollares) {
      budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning', 'alert-primary');
      budgetLeft.parentElement.parentElement.classList.add('alert-danger');
    } else if ((budgetObj.budget / 2) > budgetLeftDollares) {
      budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-primary');
      budgetLeft.parentElement.parentElement.classList.add('alert-warning');
    } 

    budgetLeft.innerHTML = `${budgetLeftDollares}`;
  }

}

//variables
const mainBudget = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left'),
      form = document.querySelector('#add-expense')


//this variables are enabled globally
let userBudget, budgetObj, budgetLeftDollares, expensesTitle, expensesAmount;

//instantiating the HTML class
let html = new HTML()

//event listeners
eventlisteners();
function eventlisteners() {

  //when the page reloads
  document.addEventListener('DOMContentLoaded', () => {
    userBudget = prompt('Please Can You Set Your Week\'s Budget???');

    //add a validation for the user input
    if (userBudget === null || userBudget === '' || userBudget === undefined || userBudget === '0') {
      window.location.reload();

    } else {

      //here we instantiate the budget class
      budgetObj = new BUDGET(userBudget)

      //sending the values into the html class
      html.insertBudget(budgetObj.budget);
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // reaed values
    expensesTitle = document.querySelector('#expense').value
    expensesAmount = document.querySelector('#amount').value

    //validating values 
    if (expensesTitle === '' || expensesAmount === '') {
      
      //display error message
      html.printMessage('Error, All Field Must Be Filled', 'alert-danger')
    
    } else {
      
      //display success message
      html.printMessage('Success, Expenses added Successfully', 'alert-success');

      setTimeout(() => {
        //send expenses to display list 
        html.addExpenseToList(expensesTitle, expensesAmount)

      //print expense reduing
        html.trackBudget(expensesAmount);
      }, 3000)
    }

  })
 
}