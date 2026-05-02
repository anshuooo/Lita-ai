const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  inquiryType: { type: String, required: true, enum: ['leasing', 'sponsorship', 'event'] },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
