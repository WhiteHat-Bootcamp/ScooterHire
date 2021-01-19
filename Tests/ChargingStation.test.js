const ChargingStation = require('../src/ChargingStation.js');

describe ('ChargingStation', function()
{
    test('Charging Station charges scooter properly', async function()
    {
        const scooter1 = new Scooter(55995, 2, false, false);
        const chargo1 = new ChargingStation(50, 80);
        await chargo1.chargeScooter(scooter1);
        console.log("Test complete");
        expect(scooter1.isCharged).toEqual(true);
    })
})
