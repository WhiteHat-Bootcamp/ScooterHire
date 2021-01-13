const Person = require("./Person.js");
const Plane = require("./Plane.js");

/**
 * Passenger class - inherits from Person. Adds a new property of ticket number and two methods (addBag and boardPlane)
 */
class Passenger extends Person
{
    //properties
    ticketNumber; 

     /** construct with the name and ticket number of the passenger and details regarding their bags
     * @param {int} ticketNumber
     * Default arguments of 0 and empty for the bags */

    constructor(ticketNumber, name, totalBags, bags)
    {
        if (!ticketNumber)
        {
            throw new Error('Passenger must have a ticket number to fly!');
        }
        super(name, bags, totalBags);
        this.ticketNumber = ticketNumber;
    }

    addBag(bag){
        this.bags.push(bag);
        totalBags += 1;
    }

    boardPlane(plane)
    {
        plane.boardPassenger();
    }

}

module.exports = Passenger;