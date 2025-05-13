// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = () => {
	returun `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	this.topSpeed = topSpeed;
	Car.call(this, make, model) //propety inheritance
}

SportsCar.prototype = Object.create(Car.prototype); //Method inheritance
// SportsCar.prototype.Constructr = SportsCar;
SportsCar.prototype.getTopSpeed = () => {
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
