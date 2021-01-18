const Scooter = require('../src/Scooter.js');
const HireStation = require('../src/HireStation.js');
const Customer = require('../src/Customer.js');
const ChargingStation = require('../src/ChargingStation.js');
const NewElectricScooter = require('../src/NewElectricScooter.js');
const Cashier = require('../src/Cashier.js');

describe ('Electric Scooter', function()
{
    test('Scooter is constructed as it should be', function(){
        const scootylee = new NewElectricScooter(12345, 3, true, false);

        expect(scootylee.plate).toEqual(12345);
        expect(scootylee.wheels).toEqual(3);
        expect(scootylee.isCharged).toEqual(true);
        expect(scootylee.isBroken).toEqual(false);
        expect(scootylee.deposit).toEqual(100);
        expect(scootylee.locX).toEqual(0);
        expect(scootylee.locY).toEqual(0);

    })
})