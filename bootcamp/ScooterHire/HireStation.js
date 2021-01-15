/**
 * Class that represents the HireStation. 
 */

class Scooter
{
    /**Properties */
   
    static allScooters; //string array
    static allElectricScooterscurrentInventory; //string array
    static currentInventoy; //string array
    static checkedOutScooters; //string array
    static locX; //int
    static locY; //int
    cashRegister; //int
    depositPool; //int

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
    }

   /** Methods */

   checkOut(sc00ter)
   {
        this.currentInventory.splice(this.currentInventory.indexOf(sc00ter), 1);
        this.checkedOutScooters.push(sc00ter);
   }

   checkIn()
   {

   }

   renewCharge(Scooter)
   {
       Scooter.isCharged = true; 
   }

}

module.exports = Scooter;