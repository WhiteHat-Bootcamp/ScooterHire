class Plane
{
    origin;
    destination;
    boardedPassengers;
    totalBoardedPassengers;

     /** construct with the origin and destination of the plane
     * @param {string} origin
     * @param {string} origin*/

    constructor(origin, destination)
    {
        this.origin = origin;
        this.destination = destination;
    }

    boardPassenger(Passenger)
    {
        this.boardedPassengers.push(Passenger);
        this.totalBoardedPassengers += 1; 
    }

    takeOff()
    {
        
    }
}

module.exports = Plane;
