//Object Construuctor
// function Client(name, balance) {
// 	this.name = name;
// 	this.balance = balance;
// };

// //attaching prototype to the objects as methods
// Client.prototype.membership = function () {
// 	let name;

// 	if (this.balance > 1000) {
// 		name = 'Gold';
// 	} else if (this.balance > 500) {
// 		name = 'PLatinum';
// 	} else {
// 		name = 'Normal'
// 	}
// 	return name;
// };

// //Another prototype
// Client.prototype.clientInfo = function () {
// 	return `Name: ${this.name}, Balance: ${this.balance},
// 	Membership: ${this.membership()}`
// }

// Client.prototype.withdraw = function (amount) {
// 	this.balance -= amount;
// }

// Client.prototype.deposit = function (amount) {
// 	this.balance += amount;
// }

// Client.prototype.getBalance = function (amount) {
// 	return this.balance;
// }

// const person = new Client('Ngozi', 280000);

// // console.log(person.clientInfo());
// //using call() method to inherit an object contructor to another object
// function Busines(name, balance, phone, category) {
// 	//inheritance
// 	Client.call(this, name, balance)
// 	this.phone = phone;
// 	this.category = category;
// }
// //we can also inherit the prototype methods by recreating them
// Busines.prototype = Object.create(Client.prototype);

// //changing the constructor object
// Busines.prototype.constructor = Busines;

// const business = new Busines('Tochi', 6000000000000000000, 0827923810301, 'Professional');
// console.log(business);
// console.log(business.clientInfo())

//using ES6 class methods
class Client {

	constructor (name, balance) {
		this.name = name;
		this.balance = balance;
	}
	
	//adding the method
	membership() {
		let name;

		if (this.balance > 1000) {
			name = 'Gold';
		} else if (this.balance > 500) {
			name = 'PLatinum';
		} else {
			name = 'Normal'
		}
		return name;
	}

	clientInfo () {
		return `Name: ${this.name}, Balance: ${this.balance},
		Membership: ${this.membership()}`
	}

	withdraw() {
		this.balance -= amount;
	}

}

//uding inherisnce in es6
class Busines extends Client { 
	constructor(name, balance, photo, category) {
		super(name, balance)
		this.photo = photo
		this.category = category
	}
}
