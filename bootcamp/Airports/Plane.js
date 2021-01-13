const { airports } = require("./Airport.js");
const Airport = require("./Airport.js");
const Passenger = require("./Passenger.js");

/**
 * Plane class - methods relate to both Airport and Passenger classes. 
 */

class Plane
{
    origin; //string
    destination; //string
    boardedPassengers = []; //array of objects
    totalBoardedPassengers = 0; //int

     /** construct with the origin and destination of the plane
     * @param {string} origin
     * @param {string} destination*/

    constructor(origin, destination)
    {
        this.origin = origin;
        this.destination = destination;
    }

    boardPassenger(Passenger) // is automatically called when boardPlane is called in the Passenger class
    {
        this.boardedPassengers.push(Passenger);
        this.totalBoardedPassengers += 1; 
    }

    takeOff() //Calls the landPlane() method in the Airport class to automatically update Airport properties
    {
        Airport.allAirports.forEach(Airport =>
            {
                if(Airport.city == this.destination)
                {
                    Airport.landPlane(this);
                }
            })
    }
}

module.exports = Plane;
