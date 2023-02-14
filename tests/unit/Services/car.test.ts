import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import carMock from '../Mocks/car.mock';
import CarService from '../../../src/Services/car.service';

const RESULT_ERROR = 'Invalid Car';

describe('Deveria cadastrar listar e atualizar carros', function () {
  it('Cadastrar carro com sucesso, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const carInput = carMock;

    const carOutput = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(carOutput);
    // Act
    try {
      const service = new CarService();
      await service.createCar(carInput);
    } catch (error) {
    // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    } 
  });

  it('Listar carros com sucesso, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const carOutput = [{
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }];
    sinon.stub(Model, 'find').resolves(carOutput);
    // Act
    try {
      const service = new CarService();
      await service.getAllCars();
    } catch (error) {
    // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    } 
  });

  it('Listar carros por id, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const carId = '6348513f34c397abcad040b2';

    const carOutput = [{
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }];
    sinon.stub(Model, 'findById').resolves(carOutput);
    // Act
    try {
      const service = new CarService();
      await service.getCarsById(carId);
    } catch (error) {
    // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    } 
  });

  it('Atualizar carro por id, ou retornar erro em caso de dados errados', async function () {
    // Arrange
    const carId = '6348513f34c397abcad040b2';
    const car = carMock;

    const carUpdate = [{
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Green',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }];
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdate);
    // Act
    try {
      const service = new CarService();
      await service.updateById(carId, car);
    } catch (error) {
    // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    } 
  });

  afterEach(function () {
    sinon.restore();
  });
});
