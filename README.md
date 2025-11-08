🌦️ WeatherJs — Real-Time Weather App
A modern, animated, and responsive weather app built with React, Tailwind CSS, and Framer Motion.
It fetches real-time weather data and adapts the theme, icons, and background dynamically for day and night conditions — complete with country flags 🇮🇳 and a glassmorphic UI aesthetic.

🌍 Live Demo

https://weather-js-real-time-weather-app.vercel.app/


👉 WeatherJs Live App


✨ Features
✅ 🌦 Real-Time Weather: Get current temperature, humidity, and wind speed instantly.
✅ 🌍 Global Coverage: Fetches real-time weather data for millions of cities worldwide, powered by WeatherAPI’s global network.
✅ 🌞 / 🌙 Day–Night Mode: Automatically switches background and icon depending on the time of day.
✅ 🌈 Dynamic Gradients: Color themes change based on weather conditions like rain, sun, clouds, or snow.
✅ 💫 Animated UI: Smooth transitions powered by Framer Motion.
✅ 🧊 Glassmorphism Design: Transparent frosted-glass weather card with soft shadows.
✅ 📱 Responsive: Works perfectly on mobile, tablet, and desktop.
✅ 🎨 Gradient Text & Icons: Aesthetic design with subtle glow and motion.
✅ 🔍 Search Function: Fetch weather details for any city instantly.

🧠 Tech Stack
TechnologyPurpose⚛️ React.jsCore frontend framework🎨 Tailwind CSSUtility-first styling🌀 Framer MotionAnimations and transitions🌐 Weather APIReal-time weather data source (WeatherAPI.com)

📦 Project Setup
1️⃣ Clone this repository
git clone https://github.com/shubham-k9/WeatherJs.git
cd WeatherJs

2️⃣ Install dependencies
npm install

3️⃣ Add your Weather API key
Create a new file inside /src/utils/Api.js
and add the following code:
export const Api = "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=";


Replace YOUR_API_KEY with your API key from WeatherAPI.com.

4️⃣ Run the project
npm run dev

Then open your browser at the link shown in the terminal — typically http://localhost:5173
```
🧩 Folder Structure
WeatherJs/
├── components/
│   └── Weather.jsx
├── utils/
│   └── Api.js
├── index.html
├── package.json
└── tailwind.config.js
```

🌗 Dynamic Themes
TimeConditionGradientIcon☀️ DayClear / SunnyYellow → Orange☀️🌧️ DayRainyGray → Blue🌧️🌙 NightClear SkyGray → Indigo🌙🌌 NightCloudyGray → Black☁️



💡 Future Enhancements


⛅ 7-Day Forecast Cards


🗺️ Auto Location Detection (Geolocation API)


🎵 Animated Backgrounds (Floating Clouds / Raindrops)


🕹️ Dark–Light Toggle Option



👨‍💻 Author
Built with 💙 by
<span style="font-weight:700; background: linear-gradient(to right, #facc15, #f97316); -webkit-background-clip: text; color: transparent;">Shubham Kadbhane</span>

React Developer | Software Engineer | Car Enthusiast 🚗


📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it with attribution.

