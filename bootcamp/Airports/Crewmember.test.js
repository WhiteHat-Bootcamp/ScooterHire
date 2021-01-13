const Crewmember = require('./CrewMember.js');
const Person = require('./Person.js');
const Passenger = require('./Passenger.js');
const Plane = require('./Plane.js');

describe('Crewmember', function()
{
    test('Crewmember has the properties it should', function()
    {
        const sarah = new Crewmember("Sarah");
        expect(sarah.name).toEqual("Sarah");
        expect(sarah.ticketNumber).toEqual("000000");
        expect(sarah.totalBags).toEqual(1);
        expect(sarah.bags).toEqual([15]);
    })
})