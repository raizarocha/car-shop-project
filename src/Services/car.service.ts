import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  public createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const registerNewCar = await carODM.create(car);

    return this.createCarDomain(registerNewCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    const carsArray = cars.map((car) => this.createCarDomain(car));

    return carsArray;
  }

  public async getCarsById(id: string) {
    const carODM = new CarODM();
    const findId = await carODM.findById(id);
    const carId = this.createCarDomain(findId);

    return carId;
  }

  public async updateById(id: string, car: ICar) {
    const carODM = new CarODM();
    const findId = await carODM.updateById(id, car);
    const findAndUpdate = this.createCarDomain(findId);

    return findAndUpdate;
  }
}

export default CarService;
