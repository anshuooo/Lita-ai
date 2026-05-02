# Dubai Mall Interactive Sales Deck

A premium, full-stack interactive sales presentation tool designed for the Dubai Mall. This application is built to feel like a luxury brand presentation, utilizing video-first storytelling and a non-linear section-based navigation system.

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB, JWT Authentication
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Features

- **Section-Based Navigation:** Each section is a full viewport (100vh) experience.
- **Cinematic UI:** Luxury dark theme inspired by Apple, Tesla, and Hermès.
- **Video Integration:** Autoplay background videos for an immersive experience.
- **Interactive Modules:** Full-screen overlays for Leasing, Sponsorship, and Event bookings.
- **Production-Ready Backend:** Robust API structure with Mongoose models and JWT protected routes.
- **Responsive Design:** Optimized for high-end desktop and tablet displays.

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. Seed the admin user (optional):
   ```bash
   npm run seed
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # API logic
│   ├── middleware/      # Auth & error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── server.js        # Entry point
│   └── seeder.js        # Admin user seeder
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # UI Components & Modules
│   │   ├── App.jsx      # Main application logic
│   │   ├── main.jsx     # Entry point
│   │   └── index.css    # Global styles & Tailwind
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Business Goals
This tool is designed to drive high-value business actions:
- **Leasing:** Attract premium global brands.
- **Sponsorship:** Showcase high-visibility partnership opportunities.
- **Events:** Highlight the mall as the premier venue for global activations.
