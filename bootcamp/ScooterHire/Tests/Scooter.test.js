const Scooter = require('../src/Scooter.js');

describe ('Scooter', function()
{
    test('Scooter is constructed as it should be', function(){
        const scootyroo = new Scooter(12345, 3, true, false);

        expect(scootyroo.plate).toEqual(12345);
        expect(scootyroo.wheels).toEqual(3);
        expect(scootyroo.isCharged).toEqual(true);
        expect(scootyroo.isBroken).toEqual(false);
        expect(scootyroo.deposit).toEqual(50);
        expect(scootyroo.locX).toEqual(0);
        expect(scootyroo.locY).toEqual(0);

    })
})