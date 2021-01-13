const Person = require('./Person.js');
const Passenger = require('./Passenger.js');
const Plane = require('./Plane.js');

/**
 * Class creates a crewmember on a Plane. Inherits from Passenger class.
 */

class Crewmember extends Passenger
{
    //properties
    inUniform = false;

    /**
    * Constructs a crewmember which inherits from Passenger (which inherits from plane)
    * @param {boolean} inUniform;
    * @param {string} name;
    */
    constructor(name, inUniform=false)
    {
        super("000000", name, 1, [15]);
        this.inUniform = inUniform; 
    }
}

module.exports = Crewmember;





