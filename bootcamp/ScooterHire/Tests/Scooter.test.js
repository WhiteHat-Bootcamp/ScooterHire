const Scooter = require('../src/Scooter.js');

describe ('Scooter', function()
{
    test('Scooter is constructed as it should be', function(){
        const scootyroo = new Scooter(12345, 3, true, false);

        expect(scootylee.plate).toEqual(12345);
        expect(scootylee.wheels).toEqual(3);
        expect(scootylee.isCharged).toEqual(true);
        expect(scootylee.isBroken).toEqual(false);
        expect(scootylee.deposit).toEqual(50);
        expect(scootylee.locX).toEqual(0);
        expect(scootylee.locY).toEqual(0);

    })
})