class Passenger{

    // will be the name of the passenger and number of bags they carry 

    constructor(name, bags)
    {
        this.name = name;
        this.bags = bags;
    }

    addBag(bag){
        this.bags.push(bag);
    }

}

module.exports = Passenger;