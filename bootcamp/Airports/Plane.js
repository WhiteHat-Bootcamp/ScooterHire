class Plane
{
    origin;
    destination;
    boardedPassengers = [];
    totalBoardedPassengers = 0;

     /** construct with the origin and destination of the plane
     * @param {string} origin
     * @param {string} origin*/

    constructor(origin, destination)
    {
        this.origin = origin;
        this.destination = destination;
    }

    boardPassenger(passenger)
    {
        this.boardedPassengers.push(passenger);
        this.totalBoardedPassengers += 1; 
    }

    takeOff()
    {
        
    }
}

module.exports = Plane;
