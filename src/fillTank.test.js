/* eslint-disable max-len */
'use strict';

describe('fillTank', () => {
  const {
    fillTank,
  } = require('./fillTank.js');

  it('should not return anthing ', () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    expect(fillTank(customer, 10, 5)).toBeUndefined();
  });

  it('should fuels full tank if amount is unknown', () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 10);
    expect(customer.vehicle.fuelRemains).toBe(40);
  });

  it('should not tank if amount is lower than two', () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 10, 1);
    expect(customer.money).toBe(3000);
  });

  it('should round purchased fuel price to the nearest hundredth part', () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 10.111, 11);
    expect(customer.money).toBe(2888.78);
  });

  it('should round the poured amount by discarding number to the tenth part', () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 10, 10.17);
    expect(customer.money).toBe(2899);
  });

  it('should always fill in only what the client can pay', () => {
    const customer = {
      money: 100,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 10, 12);
    expect(customer.money).toBe(0);
  });

  it('should tank only what will fit if the amount is greater than tank can accomodate', () => {
    const customer = {
      money: 1000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 35,
      },
    };

    fillTank(customer, 10, 10);
    expect(customer.money).toBe(950);
  });
});
