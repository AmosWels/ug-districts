const districts = require('./data.json');
const myArray = districts.data;

/** @function
 * @name getDistrict
 *
 * @param {string} district
 *
 * */
getDistrict = (district) => {
    for (var i=0; i < myArray.length; i++) {
            if (myArray[i].asciiname = district) {
                return myArray[i];
            } else{
                return `No district with name ${district} found`
            }
    }
}

/** @function
 * @name getDistricts
 *
 * */
getDistricts =()=>{
    var myDistricts = new Object();
    var dataSet = []
    myArray.forEach(element => {
        myDistricts.name = element.asciiname
        myDistricts.location = element.location
        myDistricts.population = element.population
        dataSet.push(myDistricts) 
    });
    return dataSet;
}

console.log(getDistricts())

module.exports = {
    getDistrict,
    getDistricts
}
