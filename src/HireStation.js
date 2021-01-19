const Scooter = require('./Scooter.js');
//const NewElectricScooter = ('./NewElectricScooter.js');
//const Cashier = require('./Cashier.js');
const Customer = require('./Customer.js');

/**
 * @class Class that represents the HireStation.
 */

class HireStation
{
     /** 
     * @property {array} allScooters;
     * @property {array} currentInventory;
     * @property {array} checkedOutScooters;
     * @property {number} locX;
     * @property {number} locY;
     * @property {number} cashRegister;
     * @property {number} depositPool;
     * @property {number} hireCharge;
     */
   
    static allScooters = []; //static scooter array
    static currentInventoy = []; //static scooter array
    static checkedOutScooters = []; //static scooter array
    static locX; //static int
    static locY; //static int
    static cashRegister = 0; //static int
    static depositPool = 0; //static int
    static hireCharge = 200; //static int 

   /**
    * Constructs with X and Y coordinates and the Scooters it has on Day 1
    * @constructor 
    * @param {number} locX
    * @param {number} locY
    * @param {array} allScooters
    */

    constructor (locX, locY)
    {
        this.locX = locX;
        this.locY = locY;
        this.allScooters = [];
        this.currentInventory = [];
        this.cashRegister = 0;
        this.depositPool = 0;
        this.hireCharge = 200;
    }

    /** Methods */

    /**
    * @description Adds scooters to hirestation
    * @param {scooter} sc00ter - Standard or Electric
    * @returns {void}
    */
   
    addScooter(scooter) {
        this.allScooters.push(scooter);
        this.currentInventory.push(scooter);
    }
   
   /**
    * @description Checks out a scooter from the hirestation warehoues
    * @param {scooter} sc00ter - Standard or Electric
    * @returns {void}
    */
   checkOut(sc00ter)
   {
        this.currentInventory.splice(this.currentInventory.indexOf(sc00ter), 1);
        this.checkedOutScooters.push(sc00ter);
   }

   /**
    * @description Checks in a scooter returned by a Customer to the hirestation warehoues
    * @param {Scooter} sc00ter - Standard or Electric
    * @returns {void}
    */
   checkIn(sc00ter)
   {
        this.currentInventoy.push(sc00ter);
        this.checkedOutScooters.splice(this.checkedOutScooters.indexOf(sc00ter), 1);
   }

   /**
    * @description Allows the hirestation to renew a Scooter's charge
    * @param {scooter} sc00ter - Standard or Electric
    */
   renewCharge(sc00ter)
   {
       sc00ter.isCharged = true; 
   }

   inspectScooter(sc00ter)
   {
       console.log("Scooter looks fine!"); //simple code for purpose of exercise 
   }

}

module.exports = HireStation;