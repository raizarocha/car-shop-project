import { Router } from 'express';

import CarController from '../Controllers/car.controller';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllCars(),
);

carRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getCarsById(),
);

carRoutes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCarsById(),
);

export default carRoutes;
