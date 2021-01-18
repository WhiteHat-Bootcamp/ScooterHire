// const prompt = require('prompt-sync')();
// const Person = require('../src/Person.js');
const Scooter = require('../src/Scooter.js');
const HireStation = require('../src/HireStation.js');
// const Customer = require('../src/Customer.js');
// const ChargingStation = require('../src/ChargingStation.js');
const NewElectricScooter = require('../src/NewElectricScooter.js');
const Cashier = require('../src/Cashier.js');

describe ('Cashier', function()
{
    test('Book scooter works as it should', function(){
        let A = new Scooter(12345, 2, true, false);
        let B = new NewElectricScooter(67890, 2, true, false);
        let C = new Scooter(98765, 3, true, false);
        let H = new HireStation(70, 90, [A, B, C]);

        const myCashier = new Cashier("Bob",500)
        expect(myCashier.name).toEqual("Bob");

        expect(H.currentInventory).toEqual([A, B, C]);
        
    })
})
