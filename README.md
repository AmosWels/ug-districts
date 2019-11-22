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





