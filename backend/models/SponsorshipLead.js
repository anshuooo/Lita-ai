const mongoose = require('mongoose');

const sponsorshipLeadSchema = mongoose.Schema({
  brandName: { type: String, required: true },
  campaignType: { type: String, required: true },
  budget: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SponsorshipLead', sponsorshipLeadSchema);
