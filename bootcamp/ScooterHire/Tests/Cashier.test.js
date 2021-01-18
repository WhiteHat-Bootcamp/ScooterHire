const prompt = require('prompt-sync')();
const Person = require('../src/Person.js');
const Scooter = require('../src/Scooter.js');
const HireStation = require('../src/HireStation.js');
const Customer = require('../src/Customer.js');
const ChargingStation = require('../src/ChargingStation.js');
const newElecricScooter = require('../src/NewElectricScooter.js');
const Cashier = require('../src/Cashier.js');

describe ('Cashier', function()
{
    test('Book scooter works as it should', function(){
        const hireScoo = new HireStation(70, 90);
        const scootyroo = new Scooter(12345, 2, true, false, hireScoo);
        const scootylee = new NewElectricScooter(67890, 2, true, false, hireScoo);
        const scootybaa = new Scooter(98765, 3, true, false, hireScoo);
    })
})
