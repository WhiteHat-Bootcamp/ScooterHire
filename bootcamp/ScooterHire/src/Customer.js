const Person = require('./Person.js');
const Scooter = require('./Scooter.js');
const HireStation = require('./HireStation.js');
const Cashier = require('./Cashier.js');
const ChargingStation = require('./ChargingStation.js');
//const newElecricScooter = require('./NewElectricScooter.js');

/**
 * @Class Customer - inherits from Person. Individual who rents Scooter. *
 */

 class Customer extends Person
 {
     /**@property {bool} isWalletEmpty */

     isWalletEmpty = false; //bool 

     /**Inherits part of constructor from Person 
      * @param {bool} isWalletEmpty
     */

     constructor (name, cash, isWalletEmpty=false)
     {
         super(name, cash)
         this.isWalletEmpty = isWalletEmpty;
     }

    /**
    * @description Customer asks to book a scooter
    * @param {string} standardOrElectric - Standard or Electric scooter type
    * @returns {void}
    */

     requestScooter(standardOrElectric)
     {
        Cashier.bookScooter(standardOrElectric);
     }

    /**
    * @description Customer pays for scooter
    * @param {number} hirecharge 
    * @param {number} deposit
    * @returns {void}
    */

     makePayment(hirecharge, deposit)
     {
        HireStation.cashRegister += hirecharge;
        HireStation.depositPool += deposit;
     }

     /**
    * @description Customer drive method calls the Scooter drive method 
    * @param {scooter} sc00ter (standard or electric) 
    * @param {number} x 
    * @param {number} y
    * @returns {void}
    */

     drive(sc00ter, x, y)
     {
        sc00ter.drive(x, y);
        sc00ter.isCharged = false; 
     }

     returnScooter(sc00ter)
     {
        HireStation.checkIn(sc00ter);
        HireStation.inspectScooter(sc00ter);
        Cashier.returnDeposit(sc00ter);
     }

 }

 module.exports = Customer;