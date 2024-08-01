import { Car } from '../models/car.js';
import { carStorage } from '../storage/car.js';

export class CarHandler{
	async addCar(data){//add new car to marketplace
		if (!data.plate || !data.name || !data.model || !data.price){
			return await RollupStateHandler.handleReport({
				error:'car plate, name, model and price must be provided to list'
			});
		}
		return await RollupStateHandler.advanceWrapper(() => {
			const newCar = new Car(data);
			CarStorage.addCar(newCar);

			return {
				success: true,
				message: `${data.name} successfully added to the marketplace`,
				data: newCar.getData(),
			};

		});
	}
	async getCar(data){// get a particular car based on id
		const carId = data[0];
		const requiredCar = carStorage.getCar(carId);

		return await RollupStateHandler.inspectWrapper(() => ({
			details: requiredCar,
		}));
	} 
	async getAllCars(){// get all cars in the marketplace
		const allCars = carStorage.allCars();

		return await RollupStateHandler.inspectWrapper(() => ({
			details: allCars,
		}));
	} 
	async getNumberOfCars(){// get total number of cars in the marketplace
		const numberOfCars = carStorage.getTotalNumberOfCars();

		return await RollupStateHandler.inspectWrapper(() => ({
			details: numberOfCars,
		}));
	} 
	async getNumberOfAvailableCars(){//get number of cars with available =true
		const numberOfAvailableCars = carStorage.getNumberOfAvailableCars();

		return await RollupStateHandler.inspectWrapper(() => ({
			details: numberOfAvailableCars,
		}))
	} 
	async getAllAvailableCars(){// get cars that are available for sale
		const allAvailableCars = carStorage.getAllAvailableCars();

		return await RollupStateHandler.inspectWrapper(() => ({
			details: allAvailableCars,
		}));
	} 
	async updateAvailability(id, ownerId, available){// make car on maketplace available or unavaialable for buyers
		const updatedCar = carStorage.updateCarAvailability(id, available);

		if (updatedCar){
			return await RollupStateHandler.advanceWrapper(() => ({
				details: `Car ${id} availability  updated to ${available}`,
			}));
		} else{
			return await RollupStateHandler.advanceWrapper(() => ({
				details: `Car ${id} not found`,
			}));
		}
	} 
}

