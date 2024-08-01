import { CarHandler } from './carHandlers';

const carHandler = new CarHandler();

export const handler = {
    addCar: carHandler.addCar,
	getCar: carHandler.getCar,
	getAllCars: carHandler.getAllCars,
	getAllAvailableCars: carHandler.getAllAvailableCars,
	getNumberOfAvailableCars: carHandler.getNumberOfAvailableCars,
	updateAvailability: carHandler.updateAvailability
}