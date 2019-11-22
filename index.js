const districts = require('./data.json');
const myArray = districts.data;

getDistrict = (nameKey) => {
    for (var i=0; i < myArray.length; i++) {
            if (myArray[i].asciiname = nameKey) {
                return myArray[i];
            } else{
                return `No district with name ${nameKey} found`
            }
    }
}

module.exports = {
    getDistrict
}
