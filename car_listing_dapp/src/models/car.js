// car model for car marketplace
import cypto from 'node:crypto'

export class Car{
	id;
	plate;
	owner;
	name;
	model;
	price;
	available; // available for purchase or not

	constructor(owner){
		this.id = crypto.randomUUID(); 
		this.plate = plate;
		this.owner = owner;
		this.name = name;
		this.model = model;
		this.price = price;
		this.available = true // availability for purchase initialized to true

	}

	addCar(){}
	getCar(){}
	getAllCars(){}
	getNumberOfCars(){}
	getNumberOfAvailableCars(){}
	getAllAvailableCars(){}

}