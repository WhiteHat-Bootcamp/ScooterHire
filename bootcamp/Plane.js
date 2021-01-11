class Plane
{
    origin;
    destination;
    boardedPassengers;
    totalBoardedPassengers;

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

    module.exports(Plane);
}