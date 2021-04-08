// require our modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

// initial the express app
const app = express();

// configure settings app.set()
// TODO: require and configure our dotenv module
// TODO: require our database config file

// mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.json()); // converts incoming json into req.body
app.use(cors());

// mount our routes with app.use()
app.use('/api/videoblogs', require('./routes/api/videoblogs'));

// tell the app listen on port 3001

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`express is listening for AJAX request on port ${port}`)
})