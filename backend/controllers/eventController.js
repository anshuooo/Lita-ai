const EventBooking = require('../models/EventBooking');

const createEventBooking = async (req, res) => {
  const { companyName, eventType, audienceSize, dates, budget } = req.body;
  try {
    const booking = await EventBooking.create({ companyName, eventType, audienceSize, dates, budget });
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEventBookings = async (req, res) => {
  try {
    const bookings = await EventBooking.find({});
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createEventBooking, getEventBookings };
