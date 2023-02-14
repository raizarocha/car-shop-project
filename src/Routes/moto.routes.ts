import { Router } from 'express';

import MotoController from '../Controllers/moto.controller';

const motoRoutes = Router();

motoRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).create(),
);

motoRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).getAllMoto(),
);

motoRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotoController(req, res, next).getMotoById(),
);

export default motoRoutes;
