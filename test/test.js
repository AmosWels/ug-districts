const mocha = require('mocha');
const chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

const {getDistrict, getDistricts} = require('../index');
const {data} =  require('../data.json')

describe('getDistricts --> get Districts details test suite',()=>{
    it('it should return all districts in Uganda',()=>{
       expect(getDistricts()).to.have.lengthOf(76);
    })

    it('it should return all districts in Uganda in an array format',()=>{
        assert.typeOf(getDistricts(), 'array');
    })

    xit('it should return an empty array if there are no listed districts in Uganda',()=>{
        getDistricts == [];
        console.log('tests', getDistricts)
        expect(getDistricts.to.be.array());
    })
});

describe('getDistrict --> get District test suite',()=>{
    it('should throw a message if an invalid district is provided',()=>{
        expect(getDistrict()).to.equal('Invalid district value');
    })

    it('should return a message if district provided doesn\'t exist in Uganda',()=>{
        const name = 'nairobi';
        assert.equal(getDistrict(name), `No district with name ${name} found in Uganda`);
    })

    it('should return an existing district with it\'s name',()=>{
        const name = 'Kampala';
        expect(getDistrict(name).asciiname).to.equal(name);
    })

    it('should return an existing district with it\'s properties',()=>{
        const name = 'Kampala';
        const result = getDistrict(name);
        assert.property(result, 'asciiname');
        expect(result.population).to.be.a('number');
    })

});