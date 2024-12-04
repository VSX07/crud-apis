const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');




router.get('/events',eventController.getAllEvents);
router.post('/addevent',eventController.createEvent);


// router.get('/events/:id', eventController.getEventById); 
// router.post('/events', eventController.createEvent);
// router.put('/events/:id', eventController.updateEvent); 
// router.delete('/events/:id', eventController.deleteEvent); 

module.exports = router; 
