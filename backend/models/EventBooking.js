const mongoose = require('mongoose');

const eventBookingSchema = mongoose.Schema({
  companyName: { type: String, required: true },
  eventType: { type: String, required: true },
  audienceSize: { type: String, required: true },
  dates: { type: String, required: true },
  budget: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EventBooking', eventBookingSchema);
