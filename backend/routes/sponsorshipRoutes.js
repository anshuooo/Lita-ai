const express = require('express');
const router = express.Router();
const { createSponsorshipLead, getSponsorshipLeads } = require('../controllers/sponsorshipController');
const { protect } = require('../middleware/auth');

router.route('/').post(createSponsorshipLead).get(protect, getSponsorshipLeads);

module.exports = router;
