import { NextFunction, Request, Response } from 'express';

import ICar from '../Interfaces/ICar';
import CarService from '../Services/car.service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = { 
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    try {
      const cars = await this.service.getAllCars();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarsById() {
    const { id } = this.req.params;

    try {
      const carId = await this.service.getCarsById(id);
      if (!carId) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(carId);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateCarsById() {
    const { id } = this.req.params;
    const car: ICar = { ...this.req.body };
 
    try {
      const carId = await this.service.updateById(id, car);
      if (!carId) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(carId);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;
