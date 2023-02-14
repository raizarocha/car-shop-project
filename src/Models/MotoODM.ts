import { Schema } from 'mongoose';

import AbstractODM from './AbstractODM';
import IMoto from '../Interfaces/IMotorcycle';

class MotoODM extends AbstractODM<IMoto> {
  constructor() {
    const schema = new Schema<IMoto>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }
}

export default MotoODM;