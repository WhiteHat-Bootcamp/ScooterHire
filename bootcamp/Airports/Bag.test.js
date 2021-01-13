const Bag = require ("./Bag.js");

describe('Bag objects', () => 
{

    test('Check weight', () => 
    {
        const bag1 = new Bag(23);
        expect(bag1.weight).toEqual(23);
    })

    test('Ensure weight is provided', () => 
    {
        expect(()=> new Bag()).toThrowError('Bag must have a weight!');
    
    })

    
})