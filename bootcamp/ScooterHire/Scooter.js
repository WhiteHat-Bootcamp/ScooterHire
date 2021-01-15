/**
 * Class that represents the Scooter itself. 
 */

 class Scooter
 {
    /**Properties */

    plate; //string
    wheels; //int - either 2 or 3
    isCharged; //bool
    isBroken; //bool
    locX = 0; //int for X coordinate
    locY = 0; //int for Y coordinate
    static depositRegular = 50; //int - represents £

    /**Constructor - constructs with plate, wheels, charge and whether broken
     * @constructor 
     * @param {string} plate
     * @param {number} wheels
     * @param {bool} isCharged
     * @param {bool} isBroken
     */

    constructor (plate, wheels, isCharged, isBroken)
    {
        this.plate = plate;
        this.wheels = wheels;
        this.isCharged = isCharged;
        this.isBroken = isBroken;
        HireStation.allScooters.push(this);
        HireStation.currentInventory.push(this);
    }

    /** Methods */

    Drive(x, y)
    {
        this.locX = x;
        this.locY = y;
    }

    Park(x, y)
    {
        this.locX = x;
        this.locX = y;
        if (this.locX == HireStation.locX & this.locY == HireStation.locY)
        {
            console.log("You have parked at the HireStation!");
        }

        else if (this.locX == ChargingStation.locX & this.locY == ChargingStation.locY)
        {
            console.log("You have parked at the HireStation!");
        }

        else
        {
            console.log("You have parked at the HireStation!");
        }
    }

 }

 module.exports = Scooter;