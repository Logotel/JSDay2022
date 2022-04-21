const pa11y = require('pa11y');

pa11y('https://stackoverflow.com/').then((results) => {
    // Do something with the results
    console.log(results);
});