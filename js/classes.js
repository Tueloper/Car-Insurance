//Classes
class Insurance{
	
	constructor(make, year, level){
		this.make = make;
		this.year = year;
		this.level = level;
	}
	
		//Calculate the price for the current quotation
	calculateQuotation(insurance){
		let price;
		const base = 2000;

		//get the make
		const make = insurance.make;

		/*
			1 = American 0.15%
			2 = Asian 1.05%
			3 = Europian 1.35%
		*/
			switch(make){
				case '1':
					price = base * 1.15;
					break;
				case '2':
					price = base * 1.05;
					break;
				case '3':
					price = base * 1.35;
					break;
			}
		//Get the year
		const year = insurance.year;

		
		//Get the year's difference
		const difference = this.getYearDifference(year);

		//Each year the cost of the insurance is going to be 3% cheaper
		price = price - ((difference * 3) * price) / 100;

		//Check the level of protection
		const level = insurance.level;

		price = this.calculateLevel(price, level);
		return price;
	}

	//Returns the differnce between years
	getYearDifference(year){
		return new Date().getFullYear() - year;

	}

	//Adds the vslue on the level of protection
	calculateLevel(price, level){
		/*
		Basic insurance is going to increase the value by 30%
		Complete is going to increase the value by 50%
		*/ 
		if(level === 'basic'){
			price = price * 1.30;
		} else {
			price = price * 1.50;
		}
		return price;
	}
}


	//Everything related to the HTML
class HTMLUI{
		//Displays the latest 20 years in the select
	displayYears(){
		//Max & minimum years
		const max = new Date().getFullYear(),
			min = max - 20;
		
		const selectYears = document.getElementById('year');
		
		for(let i = max; i > min; i--){
		const option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		selectYears.appendChild(option);
		}
	}
	
	displayError(message){
		const div = document.createElement('div');
		div.classList = 'error';
		div.innerHTML = `
		<p>${message}</p>
		`;
		form.insertBefore(div, document.querySelector('.form-group'));
		//Remove the error
		setTimeout(function(){
			document.querySelector('.error').remove();
		}, 3000);
	}
	
	//Prints the result into the HTML
	showResults(price, insurance){
		//Prints the result
		const result = document.getElementById('result');
	
		const div = document.createElement('div');
	
		let make = insurance.make;
	
		switch(make){
			case '1':
				make = 'American';
				break;
			case '2':
				make = 'Asian';
				break;
			case '3':
				make = 'Europian';
				break;
		}
	
		div.innerHTML = `
		<p class="header">Summary</p>
		<p> Make: ${make}</p>
		<p> Year: ${insurance.year}</p>
		<p> Level: ${insurance.level}</p>
		<p class="total">Total: $ ${price}</p>
		`;
	
		const spinner = document.querySelector('#loading img');
		spinner.style.display = 'block';
		setTimeout(function(){
			spinner.style.display = 'none';
			//Insert this into the HTML
		result.appendChild(div);
		}, 3000);
		
	
	}
}