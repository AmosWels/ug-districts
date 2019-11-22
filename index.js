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
    dataSet = []
    if (myArray && myArray.length>0){
        return myArray
    }
    return dataSet;
}

module.exports = {
    getDistrict,
    getDistricts
}
