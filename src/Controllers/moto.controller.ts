import { NextFunction, Request, Response } from 'express';

import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/moto.service';

class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotoService();
  }

  public async create() {
    const moto: IMotorcycle = { 
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.createMoto(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMoto() {
    try {
      const allMoto = await this.service.getAllMoto();
      return this.res.status(200).json(allMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotoById() {
    const { id } = this.req.params;

    try {
      const motoId = await this.service.getMotoById(id);
      if (!motoId) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motoId);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateMotoById() {
    const { id } = this.req.params;
    const moto: IMotorcycle = { ...this.req.body };
 
    try {
      const motoId = await this.service.updateById(id, moto);
      if (!motoId) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motoId);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotoController;
