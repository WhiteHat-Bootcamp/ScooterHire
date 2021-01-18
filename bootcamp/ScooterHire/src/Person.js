/**
 * @class Class represents a basic person. Superclass.
 */

 class Person
 {
     /**
      * @property {string} name
      * @property {number} cash 
      */

    name;
    cash = 0; 

    /**
     * @Constructor Constructs with a name and the amount of cash in possession 
     * @param {string} name
     * @param {number} cash
     */

     constructor (name, cash)
     {
         this.name = name;
         this.cash = cash; 
     }

     /**
      * @description adds cash to a person's wallet
      * @param {number} money
      */
     
    addCash(money)
    {
        this.cash += money;
    }
 }