import { Router } from 'express';

import MotoController from '../Controllers/moto.controller';

const motoRoutes = Router();

motoRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotoController(req, res, next).create(),
);

export default motoRoutes;
