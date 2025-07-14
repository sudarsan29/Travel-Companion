# 🧭 Smart Travel Companion

A modern, real-time web app that helps users stay aware of their current location, network condition, and draw safe travel zones — powered by 5 powerful Web APIs.

> 🧑‍💻 Developed using: React.js + TailwindCSS

## 🌟 Features

- 📍 **Geolocation Detection** – Get real-time location (latitude, longitude)
- 🏙️ **Reverse Geocoding** – Display city, state, country, and PIN code using [OpenCage Geocoder API](https://opencagedata.com/)
- 🖍️ **Canvas Drawing** – Draw safe zones (interactive Canvas API)
- 🌐 **Network Information** – Detect current connection type (4G/3G/Offline)
- 👀 **Scroll Observer** – Detect when user reaches the end of the page
- 🔄 **Background Location Tracker** – Saves latest user location every 10 seconds in the background

---

## 🛠️ Web APIs Used

| API | Description |
|-----|-------------|
| [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) | Fetch user coordinates (lat/lon) |
| [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Draw zones using canvas interaction |
| [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) | Detect network type (4g, 3g, offline) |
| [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | Detect scroll-to-bottom events |
| [Background Tasks Simulation](https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API) | Simulated using `setInterval()` to save location every few seconds |

---

## 🔧 Tech Stack

- **Frontend:** React.js, TailwindCSS
- **API Integration:** Axios
- **Reverse Geocoding:** OpenCage Geocoder API
- **Bundler:** Vite (blazing fast dev environment)

---

## Deployment

-- Vercel: https://travel-companion-one-silk.vercel.app/

## 📦 Installation & Running Locally

# Clone the repo
git clone https://github.com/sudarsan29/smart-travel-companion.git
cd travel-app

# Install dependencies
npm install

# Start the server
npm run dev
