const Airport = require("./Airport.js");
const Plane = require("./Plane.js");

describe('Airport', function()
{
    test('Has the properties it should', function()
        {
            const YVR = new Airport("Vancouver", 2);
            expect(YVR.city).toEqual("Vancouver");
            expect(YVR.totalTerminals).toEqual(2);
        }
    )

    test('Properties are updated when a plane lands', function()
        {
            const YVR = new Airport("Vancouver", 2);
            const EK609 = new Plane("Toronto", "Vancouver");
            YVR.landPlane(EK609);
            expect(YVR.dockedPlanes).toEqual([EK609]);
            expect(YVR.totalPlanes).toEqual(1);
        }
    )

    test('Take off method works properly', function()
        {
            const YVR = new Airport("Vancouver", 2);
            const EK609 = new Plane("Toronto", "Vancouver");
            const TOR = new Airport("Toronto", 3);
            YVR.dockedPlanes.push(EK609);
            YVR.takeOffPlane(EK609);
            expect(YVR.dockedPlanes).toEqual([]);
            expect(TOR.dockedPlanes).toEqual([EK609]);
            expect(TOR.totalPlanes).toEqual(1);
        }
    )
})
