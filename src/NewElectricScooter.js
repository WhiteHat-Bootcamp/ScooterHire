const Scooter = require('./Scooter');

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
        super(plate, wheels, isCharged, isBroken, 5, 5);
        this.deposit = 100; 
      }

      /**Methods are all inherited from Scooter */
}

module.exports = NewElectricScooter;