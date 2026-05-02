const Inquiry = require('../models/Inquiry');

const createInquiry = async (req, res) => {
  const { name, email, company, inquiryType, message } = req.body;
  console.log('Received Inquiry:', req.body);
  try {
    const inquiry = await Inquiry.create({ name, email, company, inquiryType, message });
    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: inquiry
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({});
    res.json(inquiries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createInquiry, getInquiries };
