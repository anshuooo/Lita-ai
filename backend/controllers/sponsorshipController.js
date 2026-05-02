const SponsorshipLead = require('../models/SponsorshipLead');

const createSponsorshipLead = async (req, res) => {
  const { brandName, campaignType, budget } = req.body;
  try {
    const lead = await SponsorshipLead.create({ brandName, campaignType, budget });
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSponsorshipLeads = async (req, res) => {
  try {
    const leads = await SponsorshipLead.find({});
    res.json(leads);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createSponsorshipLead, getSponsorshipLeads };
