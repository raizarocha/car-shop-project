import express from 'express';

import carRoutes from './Routes/car.routes';
import motoRoutes from './Routes/moto.routes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motoRoutes);

export default app;
