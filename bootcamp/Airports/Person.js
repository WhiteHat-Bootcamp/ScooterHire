class Person 
{
    name;
    bags;
    totalBags;

     /** construct with the name of the person and details regarding their bags
     * @param {string} name
     * @param {number} totalBags
     * @param {number []} bags 
     * Default arguments of 0 and empty for the bags */

    constructor(name, totalBags=0, bags=[])
    {
        if(!name)
        { 
            throw new Error('Person must have a name!');
        }
        this.name = name;
        this.bags = bags;
        this.totalBags = totalBags;
    }
}

module.exports = Person;