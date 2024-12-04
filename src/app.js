const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('../src/routes/userRoutes');
const eventRoutes = require('../src/routes/eventsroutes');
const errorHandler = require('../src/middlewares/errorHandler');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/events',eventRoutes);

// Error handling middleware
app.use(errorHandler);

// Export app for server
module.exports = app;
