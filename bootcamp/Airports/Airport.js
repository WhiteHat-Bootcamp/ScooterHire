class Airport
{
    city; //string
    totalTerminals //int
    totalPlanes; //int
    dockedPlanes; //string[]

     /** construct with the name of the passenger and details regarding their bags
     * @param {string} city
     * @param {number} terminals*/

    constructor (city, terminals)
    {
        this.city = city;
        this.totalTerminals = totalTerminals;
    }

    landPlane(Plane)
    {
        this.dockedPlanes.push(Plane);
        totalPlanes +=1;
    }

    takeOffPlane(Plane)
    {
        this.dockedPlanes.pull(Plane);
        totalPlanes -=1;
        // find index of plane
        // find destination
        // find airport that belongs to that 
        // call LandPlane
    }
    
}

module.exports = Airport;