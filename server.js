const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

    // allows access to css, images & js files w/o creating specific routes
app.use(express.static('public'));
    // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
    // parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const { animals } = require('./data/animals.json');


app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
});


// 'api' = deals with transfering data
// '/' || '/animals' = deal with serving html page