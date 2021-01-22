
# Install
`npm install zipsearch`

# Include
`const { findZip } = require('zipsearch');`

# Pass latitude and longitude to the findZip function
```javascript
const location = findZip(33.748997, -84.387985);
// returns an object with a zip property and value
// location.zip === "30334"
```

# Data
2019 Zip Code Tabulation Areas from [census.gov](https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html)
