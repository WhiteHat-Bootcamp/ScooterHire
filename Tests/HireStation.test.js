const HireStation = require('../src/HireStation.js');
const Scooter = require('../src/Scooter.js');
const NewElectricScooter = require('../src/NewElectricScooter.js');
const { expect } = require('@jest/globals');

describe ('HireStation', function()
{
    test('HireStation is constructed properly', function()
    {
        let hireScoo = new HireStation(70, 90);
        let scootyroo = new Scooter(12345, 2, true, false);
        let scootylee = new NewElectricScooter(67890, 2, true, false);
        let scootybaa = new Scooter(98765, 3, true, false);
        hireScoo.addScooter(scootyroo);
        hireScoo.addScooter(scootylee);
        hireScoo.addScooter(scootybaa);

        expect(hireScoo.allScooters.length).toBe(3);
        expect(hireScoo.allScooters).toEqual([scootyroo, scootylee, scootybaa]);
        expect(hireScoo.currentInventory).toEqual([scootyroo, scootylee, scootybaa]);
        expect(hireScoo.locX).toEqual(70);
        expect(hireScoo.locY).toEqual(90);
        expect(hireScoo.cashRegister).toEqual(0);
        expect(hireScoo.depositPool).toEqual(0);
        expect(hireScoo.hireCharge).toEqual(200);
    })
})