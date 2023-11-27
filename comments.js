// Create web server

// Import express
const express = require('express');

// Create express app
const app = express();

// Import body-parser
const bodyParser = require('body-parser');

// Import cors
const cors = require('cors');

// Import morgan
const morgan = require('morgan');

// Import mongoose
const mongoose = require('mongoose');

// Create port
const port = 3000;

// Import router
const router = require('./router/router');

// Import config
const config = require('./config/config');

// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Router
app.use('/api', router);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});