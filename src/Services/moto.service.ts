import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';

class MotoService {
  public createMotoDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async createMoto(moto: IMotorcycle) {
    const motoODM = new MotoODM();
    const registerNewCar = await motoODM.create(moto);

    return this.createMotoDomain(registerNewCar);
  }

  public async getAllMoto() {
    const motoODM = new MotoODM();
    const allMoto = await motoODM.find();
    const motoArray = allMoto.map((moto) => this.createMotoDomain(moto));

    return motoArray;
  }

  public async getMotoById(id: string) {
    const motoODM = new MotoODM();
    const findId = await motoODM.findById(id);
    const motoId = this.createMotoDomain(findId);

    return motoId;
  }
}

export default MotoService;
