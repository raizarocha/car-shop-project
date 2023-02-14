import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import motoMock from '../Mocks/moto.mock';
import MotoService from '../../../src/Services/moto.service';

const RESULT_ERROR = 'Invalid Motorcycle';
const MOTO_MODEL = 'Honda Cb 600f Hornet';

describe('Deveria cadastrar listar e atualizar motos', function () {
  it('Cadastrar moto com sucesso, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const motoInput = motoMock;

    const motoOutput = {
      id: '6348513f34c397abcad040b2',
      model: MOTO_MODEL,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(motoOutput);
    // Act
    try {
      const service = new MotoService();
      await service.createMoto(motoInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  it('Listar motos com sucesso, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const motoOutput = [{
      id: '6348513f34c397abcad040b2',
      model: MOTO_MODEL,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    }];
    sinon.stub(Model, 'find').resolves(motoOutput);
    // Act
    try {
      const service = new MotoService();
      await service.getAllMoto();
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  it('Listar motos por id, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const motoId = '6348513f34c397abcad040b2';

    const motoOutput = [{
      id: '6348513f34c397abcad040b2',
      model: MOTO_MODEL,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    }];
    sinon.stub(Model, 'findById').resolves(motoOutput);
    // Act
    try {
      const service = new MotoService();
      await service.getMotoById(motoId);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  it('Atualizar moto por id, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const motoId = '6348513f34c397abcad040b2';
    const moto = motoMock;

    const motoUpdate = [{
      id: '6348513f34c397abcad040b2',
      model: MOTO_MODEL,
      year: 2005,
      color: 'Blue',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    }];
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motoUpdate);
    // Act
    try {
      const service = new MotoService();
      await service.updateById(motoId, moto);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
