const Plane = require('./Plane.js');

/**
 * Airport class - located in a city; docks, lands and flies planes from the Plane class. 
 */
class Airport
{
    city; //string
    totalTerminals = 0; //int
    totalPlanes = 0; //int
    dockedPlanes = []; //[]
    static allAirports = []; 

     /** construct with the name of the passenger and details regarding their bags
     * @param {string} city;
     * @param {number} totalTerminals;
     * */

    constructor (city, totalTerminals)
    {
        this.city = city;
        this.totalTerminals = totalTerminals;
        Airport.allAirports.push(this);
    }

    landPlane(Plane) //Is automatically called when the Plane class's takeOff() method is called
    {
        this.dockedPlanes.push(Plane);
        this.totalPlanes +=1;
        Plane.destination = Plane.origin;
        Plane.origin = Plane.destination;
    }

    takeOffPlane(Plane) //If plane takes off from an airport, it calls the landPlane function of the destination airport.
    {
        this.dockedPlanes.splice(this.dockedPlanes.indexOf(Plane), 1);
        this.totalPlanes -=1;
        Airport.allAirports.forEach(Airport =>
            {
                if (Airport.city == Plane.destination)
                {
                    Airport.landPlane(Plane)
                }
            })
    }
    
}

module.exports = Airport;