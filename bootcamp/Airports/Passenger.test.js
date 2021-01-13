const Passenger = require("./Passenger.js")
const Bag = require("./Bag.js")
const Person = require("./Person.js");
const Plane = require("./Plane");
const { TestScheduler } = require("jest")

describe('Passenger', function()
{

    test ('error if no ticket number', function()
    {
        expect (() => new Passenger()).toThrowError('Passenger must have a ticket number to fly!');
    })

    test ('is an instance of', ()=>{
        const rachelPassenger = new Passenger(123333, "Rachel", 1, [23]);
        expect(rachelPassenger instanceof Passenger).toBeTruthy();

    })

    test ('boarding a passenger updates the plane', function()
    {
        const chandler = new Passenger(333444, "Chandler", 2, [10, 24]);
        const EK606 = new Plane("Vancouver", "London");
        chandler.boardPlane(EK606);
        expect(EK606.totalBoardedPassengers).toEqual(1);
        expect(EK606.boardedPassengers).toEqual([chandler]);
    })

    test('addBag adds a bag', function()
    {
        const phoebe = new Passenger(149587, "Phoebe", 2, [10, 24]);
        const thirdBag = new Bag(20);
        phoebe.addBag(thirdBag);
        expect(phoebe.totalBags).toEqual(3);
        expect(phoebe.bags).toEqual([10, 24, thirdBag]);
    })

})
