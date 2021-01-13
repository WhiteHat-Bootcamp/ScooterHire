const Person = require("./Person.js");
const Bag = require("./Bag.js");

describe('Person', function()
{
    test ('has a name', function()
    {
        const person1 = new Person("Joey");
        expect (person1.name).toEqual ("Joey");
        expect (person1.totalBags).toEqual(0);
        expect (person1.bags).toEqual([]);
    })

    test ('bags exist and have weight', function()
    {
        const person2 = new Person("Ross", 2, [new Bag(10), new Bag(23)]);
        expect (person2.name).toEqual("Ross");
        expect (person2.bags[0].weight).toBe(10);
        expect (person2.bags[1].weight).toBe(23);
        expect (person2.totalBags).toEqual(2);
    })

    test ('error if no name', function()
    {
        //const passenger = new Passenger();
        expect (() => new Person()).toThrowError('Person must have a name!');
    })

})
