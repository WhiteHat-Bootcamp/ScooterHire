const Scooter = require("./Scooter.js");
const HireStation = require('./HireStation.js');
const Cashier = require('./Cashier.js');
const ChargingStation = require('./ChargingStation.js');
const Customer = require('./Customer.js');

/**
 * @class Class inherits from Scooter
 */

 class NewElectricScooter extends Scooter
 {
     /**
      * Properties are inherited from Scooter except
      * @property {number} deposit
      */

      deposit = 100; 

      /**Constructs with all the properties of scooter and the revised fixed deposit*/

      constructor(plate, wheels, isCharged, isBroken)
      {
        super(plate, wheels, isCharged, isBroken, locX, locY)
        this.deposit = 100; 
      }

      /**Methods are all inherited from Scooter */
 }

module.exports = NewElectricScooter;
