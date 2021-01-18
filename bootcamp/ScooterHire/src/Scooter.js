const HireStation = require('./HireStation.js');
const Cashier = require('./Cashier.js');
const ChargingStation = require('./ChargingStation.js');
const Customer = require('./Customer.js');

/**
 * Class that represents the Scooter itself. 
 */

 class Scooter
 {
    /**Properties 
     * @property {string} plate
     * @property {int} wheels
     * @property {bool} isCharged
     * @property {int} locX
     * @property {int} locY
     * @property {int} deposit
    */

    plate; //string
    wheels; //int - either 2 or 3
    isCharged; //bool
    isBroken; //bool
    locX = 0; //int for X coordinate
    locY = 0; //int for Y coordinate
    static deposit = 50; //int - represents £

    /**Constructor - constructs with plate, wheels, charge and whether broken
     * @constructor 
     * @param {string} plate
     * @param {number} wheels
     * @param {bool} isCharged
     * @param {bool} isBroken
     * @param {HireStation} HireStation
     */

    constructor (plate, wheels, isCharged, isBroken, HireStation)
    {
        this.plate = plate;
        this.wheels = wheels;
        this.isCharged = isCharged;
        this.isBroken = isBroken;
        this.deposit = 50;
        this.locX = 0;
        this.locY = 0;
        //HireStation.allScooters.push(this);
        //HireStation.currentInventory.push(this);
    }

    /**
     * Drives the scooter to X and Y coordinates
     * @param {number} x 
     * @param {number} y 
     */
    drive(x, y)
    {
        this.locX = x;
        this.locY = y;
    }

    /**
     * Parks the scooter at X and Y coordinates
     * @param {number} x 
     * @param {number} y 
     */
    park(x, y)
    {
        this.locX = x;
        this.locX = y;
        if (this.locX == HireStation.locX & this.locY == HireStation.locY)
        {
            console.log("You have parked at the Hire Station!");
        }

        else if (this.locX == ChargingStation.locX & this.locY == ChargingStation.locY)
        {
            console.log("You have parked at the Charging Station!");
            ChargingStation.chargeScooter(this);
        }

        else
        {
            console.log("You have parked in an unknown location.");
        }
    }

 }

module.exports = Scooter;