class Bag
{
    weight;

    /** Represents a bag carried by a passenger on an airplane 
     * constructor: @param {number} weight */

    constructor(weight)
    {
        if (!weight)
        {
            throw new Error('Bag must have a weight!');
        }
        this.weight = weight;
    }  
}

module.exports = Bag;

