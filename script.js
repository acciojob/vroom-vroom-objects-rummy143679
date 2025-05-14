// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = () => {
	returun `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model) //call cars contructor to set the value
	this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype); //Method inheritance
SportsCar.prototype.Constructr = SportsCar;

SportsCar.prototype.getTopSpeed = () => {
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
