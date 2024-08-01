// car storage solution
class CarStorage{
	cars;

	constructor(){
		this.cars = new Map(); // storing cars by id
	}

	// get all cars details in the marketplace
	getAll(){
		return Array.from(this.cars.values());
	}

	// get number of cars in the marketplace
	getTotalNumberOfCars(){
		return this.cars.size;
	}

	// add new car to the marketplace(storage)
	addCar(car){
		this.cars.set(car.id, car)
	}

	// retrieve car by id
	getCar(id){
		return this.cars.get(id);
	}

	//get only cars that are available for buy
	getAvailableCars(){
		return Array.from(this.cars.values()).filter(car => car.available);
	}

	// //update car availability
	// updateCarAvailability(id, available){
	// 	const car = this.cars.get(id);

	// 	if(car){
	// 		car.available = available;
	// 		this.cars.set(id, car);
	// 		return car;
	// 	} else{
	// 		return null; // car with that id not in marketplace
	// 	}
	// }
	
}

export const carStorage = new CarStorage();