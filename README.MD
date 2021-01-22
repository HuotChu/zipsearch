
# Install
`npm install zipsearch`

# Include
`const { findZip } = require('./geosearch');`

# Pass latitude and longitude to the find method to get the zip
`const location = findZip(33.748997, -84.387985);`
// returns an object with a zip property and value
// location.zip === "30334"
