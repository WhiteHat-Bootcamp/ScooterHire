const Passenger = require("./Passenger.js");
const Airport = require("./Airport.js");
const Plane = require("./Plane.js");

describe('Plane', function()
{
    test ('has an origin and destination', function()
    {
        const EK707 = new Plane("London", "Vancouver");

        expect (EK707.origin).toEqual ("London");
        expect (EK707.destination).toEqual("Vancouver");
    })

    test ('takeOff() corresponds with Airport\'s landPlane()', function()
    {
        const EK608 = new Plane("London", "Vancouver");
        const YVR = new Airport("Vancouver", 2);
        EK608.takeOff();
        expect (YVR.dockedPlanes).toEqual([EK608]);
        expect (YVR.totalPlanes).toEqual(1);
    })

})