const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// --- MIDDLEWARE ---
// Enable CORS for frontend communication
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));

// Body Parser for JSON data (CRITICAL for POST requests)
app.use(express.json());

// --- ROUTES ---
// Mounting routes to match frontend exactly
app.use('/api/inquiry', require('./routes/inquiryRoutes'));
app.use('/api/events/book', require('./routes/eventRoutes'));
app.use('/api/sponsorship', require('./routes/sponsorshipRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Test Route to verify backend is alive
app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully on port 5000' });
});

// --- ERROR HANDLING ---
app.use((req, res, next) => {
  res.status(404).json({ message: `Route not found - ${req.originalUrl}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
