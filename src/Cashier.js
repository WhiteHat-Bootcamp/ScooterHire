const prompt = require('prompt-sync')();
//const Person = require('./Person.js');
const Scooter = require('./Scooter.js');
const HireStation = require('./HireStation.js');
const Customer = require('./Customer.js');
//const ChargingStation = require('./ChargingStation.js');
const NewElectricScooter = require('./NewElectricScooter.js');

/**
 * @class Class represents the Cashier at the HireStation
 */

 class Cashier extends Person
 {
     /**
      * Inherits constructor and properties from Person
      */

      constructor (name, cash)
      {
          super(name, cash);
      }

      /**
        * @description The whole booking process (including inventory checking, payment and checkout)
        * @param {scooter} sc00ter - Standard or Electric
        * @returns {bool}
        */
      bookScooter(standardOrElectric)
      {
        // Ascertain whether customer wants a standard or electric scooter
        let scooterType; 
        //declare the variable for the scooter that the customer will hire
        let availableScooter; 

        if (standardOrElectric.toLowerCase() == "standard")
        {
            scooterType = Scooter;
        }
        else 
        {
            scooterType = NewElectricScooter;
        }
        
        // Check all inventory - if there are no scooters at all, tell the customer. 
        if (HireStation.currentInventory.length < 1)
        {
            console.log("Unfortunately we are out of scooters today! Maybe check back in an hour, or tomorrow.");
            return false; 
        }
        else //Check the inventory for the customer's desired type 
        {
            for (i=0; i < HireStation.currentInventory.length; i++)
            {
                if (HireStation[i] instanceof scooterType)
                {
                    if(HireStation[i].isBroken == true) //if the scooter is broken, call the mechanic and continue iterating
                    {
                        this.callMechanic(HireStation[i]);
                        continue;
                    }
                    else
                    {
                        availableScooter = HireStation[i]; //assign the matching scooter to the customer
                        break;
                    }
                }

                else //if there are no scooters available in the customer's desired type, offer another, or end transaction
                {
                    const answer = prompt (`We do not have any ${scooterType} scooters available. Would you like another type of scooter instead? (YES/NO)`);
                    if (answer == YES)
                    {
                        availableScooter = HireStation[i];
                    }
                    else
                    { return false }
                }
            }
        }

        console.log(`Good news! We have a scooter available for you. I'll just need to collect payment and a deposit from you now. The hire charge is $ ${HireStation.hireCharge} and the deposit is $ ${availableScooter.deposit}.`);

        Customer.makePayment(availableScooter.deposit);

        console.log(`That's all gone through. You may collect your scooter out back. The plate number is ${availableScooter.plate}.`);

        HireStation.checkOut(availableScooter);

        return true;
      }

    /**
     * @description Cashier returns a deposit to the customer
     * @param {scooter} sc00ter - Standard or Electric
     * @returns {void}*/

      returnDeposit(sc00ter, customer)
      {
        customer.cash += sc00ter.deposit;
        HireStation.depositPool -= sc00ter.deposit;
      }

    /**
     * @description Calls the mechanic 
     * @returns {void}*/

      callMechanic()
      {
        console.log("A mechanic has been called.");
      }
 }

 module.exports = Cashier;

