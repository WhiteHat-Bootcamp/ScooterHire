/**
 * Represents a bag carried by a passenger on an airplane .
 */

class Bag
{
    weight;

    /** Constructs the bag with the weight parameter 
     * @param {number} weight 
     * */

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

