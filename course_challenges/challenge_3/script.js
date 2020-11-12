const personOne = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height ** 2);
		return this.bmi;
	},
}

const personTwo = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height ** 2);
		return this.bmi;
	},
}

if (personOne.calcBMI() > personTwo.calcBMI()) {
	console.log(`${personOne.fullName} BMI (${personOne.bmi}) is higher than ${personTwo.fullName}'s (${personTwo.bmi})`);
} else {
	console.log(`${personTwo.fullName} BMI (${personTwo.bmi}) is higher than ${personOne.fullName}'s (${personOne.bmi})`);	
}