[![Build Status](https://travis-ci.org/AmosWels/ug-districts.svg?branch=develop)](https://travis-ci.org/AmosWels/ug-districts) [![Coverage Status](https://coveralls.io/repos/github/AmosWels/ug-districts/badge.svg?branch=develop)](https://coveralls.io/github/AmosWels/ug-districts?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/b55d5bb1640beee809db/maintainability)](https://codeclimate.com/github/AmosWels/ug-districts/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b55d5bb1640beee809db/test_coverage)](https://codeclimate.com/github/AmosWels/ug-districts/test_coverage)

# ug-districts
An NPM package that show districts and their respective population size and location coordinates in Uganda. 
# Usage
Install ug_districts using `yarn add ug-districts-sizes` 
### or 
`npm install ug-districts-sizes`

## Import the getDistrict function from ug-district-sizes package as shown below;

`const {getDistrict, getDistricts} = require('ug-districts-sizes');`

### or
`import { getDistrict, getDistricts} from 'ug-districts-sizes';`

### Use the package using the sample below.
#### getDistrict Usage 

`const {getDistrict, getDistricts} = require('ug-districts-sizes')`

`const district = () => {` 
    `console.log(getDistrict('Mbale').location);`
`}`
#### getDistricts Usage
`const {getDistrict, getDistricts} = require('ug-districts-sizes')`

`const getDistricts = () => {`
        `getDistricts.map((response)=>`
    `console.log(response.name))`
`}`

### Testing
The app uses Istanbul for tests coverage. Instanbul instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase. Check out [Instanbul](https://istanbul.js.org/) for more details.



