# 🔮 AstroAI — Astrology Web App

A modern full-stack astrology web application built with **React, Vite, Tailwind CSS, Node.js, and Express**.

AstroAI allows users to enter their birth details and generate an astrology report, while also providing an interactive zodiac and horoscope experience.

> ⚠️ **Disclaimer:** Astrology content provided by this application is for entertainment and informational purposes only. It should not be considered professional, medical, financial, or legal advice.

---

## ✨ Features

- 🔮 **AI-Powered Kundli Generator**
  - Enter your name, date of birth, time of birth, and birth place.
  - Generate an astrology report based on the submitted birth details.

- 🌙 **Moon Sign Insights**
  - Explore moon-sign based astrology information.

- 💼 **Career Insights**
  - Provides astrology-based career guidance as part of the Kundli experience.

- ❤️ **Love & Relationship Insights**
  - Explore relationship and compatibility-related astrology information.

- ♈ **Zodiac Explorer**
  - Interactive selection of all 12 zodiac signs.

- 📍 **Birth Place Processing**
  - Uses backend geocoding services to process birth-place information.

- 🌌 **Interactive UI**
  - Animated planetary elements
  - Star-field backgrounds
  - Glassmorphism cards
  - Smooth page transitions
  - Responsive design

- ⚡ **Loading & Error Handling**
  - User-friendly loading states and error messages during report generation.

- 📄 **Report Support**
  - Frontend includes libraries for generating downloadable reports.

- 📱 **Responsive Design**
  - Designed to work across desktop and mobile screen sizes.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Axios
- Three.js / React Three Fiber
- Recharts
- Lucide React
- React Icons
- jsPDF
- html2canvas

### Backend

- Node.js
- Express
- Axios
- CORS
- dotenv
- node-geocoder

---

## 🏗️ Project Structure

```text
Astrology-web-app/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── animations/
│       │   └── home/
│       │
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── About.jsx
│       │   ├── Kundli.jsx
│       │   ├── Horoscope.jsx
│       │   └── NotFound.jsx
│       │
│       └── services/
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── astrologyApi.service.js
│   │   │   ├── geocoder.service.js
│   │   │   ├── location.service.js
│   │   │   └── timezone.service.js
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md# Astrology-web-app
