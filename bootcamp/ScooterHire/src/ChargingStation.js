const Scooter = require('./Scooter.js');
const HireStation = require('./HireStation.js');
const Customer = require('./Customer.js');
const Cashier = require('./Cashier.js');
const newElecricScooter = require('./NewElectricScooter.js');

/**
 * @class Class represents the Charging Station
 */

class ChargingStation 
{
    /**
     * @property {int} locX;
     * @property {int} locY;
     */
    locX;
    locY;

    /**
     * @constructor Constructs a charging station with its X and Y coordinates.
     * @param {@} locx 
     * @param {*} locy 
     */
    constructor (locx, locy)
    {
      this.locX = locx;
      this.locY = locy;
    }

    /**
      * @description charges a scooter when it is parked at the station
      * @param {scooter} sc00ter 
      * @returns {bool}
      */
    chargeScooter(sc00ter)
    {
      sc00ter.isCharged = true;
      console.log("Your scooter is fully charged again.");
    }

  }

  module.exports = ChargingStation;