const express = require('express');
const router = express.Router();
const { createEventBooking, getEventBookings } = require('../controllers/eventController');
const { protect } = require('../middleware/auth');

router.route('/').post(createEventBooking).get(protect, getEventBookings);

module.exports = router;
