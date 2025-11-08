import { Api } from "../utils/Api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("New York");
  const [searchCity, setSearchCity] = useState("");
  const [background, setBackground] = useState("from-blue-300 to-indigo-400");
  const [icon, setIcon] = useState("☀️");
  const [isNight, setIsNight] = useState(false);

  // ✅ Convert country code (e.g. "IN") to flag emoji 🇮🇳
  const getFlagEmoji = (countryCode) => {
    if (!countryCode) return "";
    return countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );
  };

  const fetchWeather = async () => {
    try {
      const res = await fetch(`${Api}${searchCity || city}`);
      const data = await res.json();
      setWeather(data);
      setCity(searchCity || city);
      setSearchCity("");
      updateWeatherUI(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const updateWeatherUI = (data) => {
    const condition = data?.current?.condition?.text?.toLowerCase() || "";
    const dayFlag = data?.current?.is_day; // 1 = day, 0 = night
    setIsNight(dayFlag === 0);

    // Base background and icon depending on time
    if (dayFlag === 0) {
      // 🌙 Nighttime themes
      if (condition.includes("clear") || condition.includes("moon")) {
        setBackground("from-gray-800 to-indigo-900");
        setIcon("🌙");
      } else if (condition.includes("cloud")) {
        setBackground("from-gray-700 to-gray-900");
        setIcon("☁️");
      } else if (condition.includes("rain")) {
        setBackground("from-blue-800 to-gray-900");
        setIcon("🌧️");
      } else {
        setBackground("from-indigo-800 to-gray-900");
        setIcon("🌌");
      }
    } else {
      // 🌞 Daytime themes
      if (condition.includes("rain")) {
        setBackground("from-gray-400 to-blue-600");
        setIcon("🌧️");
      } else if (condition.includes("cloud")) {
        setBackground("from-gray-300 to-gray-500");
        setIcon("⛅");
      } else if (condition.includes("snow")) {
        setBackground("from-blue-100 to-blue-300");
        setIcon("❄️");
      } else if (condition.includes("sun") || condition.includes("clear")) {
        setBackground("from-yellow-300 to-orange-400");
        setIcon("☀️");
      } else if (condition.includes("thunder")) {
        setBackground("from-gray-700 to-purple-700");
        setIcon("⚡");
      } else {
        setBackground("from-blue-200 to-indigo-400");
        setIcon("🌈");
      }
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const { temp_c, wind_mph, humidity, last_updated, condition, is_day } =
    weather?.current || {};
  const { name, region, country, localtime } = weather?.location || {};
  const flag = getFlagEmoji(country?.slice(0, 2));

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ${background} p-6 transition-all duration-700`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-md text-center border border-white/30"
      >
        <h1 className="text-4xl font-extrabold text-white mb-6 tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">
          {isNight ? "🌙 Night Weather" : "🌞 Day Weather"}
        </h1>

        {/* Input + Button */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Enter city name..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="flex-1 border border-white/40 bg-white/10 text-white placeholder-white/60 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={fetchWeather}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-2xl font-semibold shadow-lg hover:shadow-2xl active:scale-95 transition-all"
          >
            Search
          </button>
        </div>

        {/* Weather Data */}
        {weather ? (
          <motion.div
            key={city}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 rounded-2xl p-6 text-white space-y-3 shadow-md border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.4)]">
              {name}, <span className="text-blue-200">{region}</span>
            </h2>
            <p className="text-md text-blue-100 tracking-wide font-semibold">
              {flag} {country}
            </p>

            <div className="mt-6 flex flex-col items-center space-y-1">
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-8xl mb-2"
              >
                {icon}
              </motion.p>
              <p className="text-6xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">
                {temp_c}°C
              </p>
              <p className="text-lg capitalize text-white/90 font-medium tracking-wide italic">
                {condition?.text}
              </p>
            </div>

            <div className="mt-6 text-sm text-white/80 space-y-1">
              <p className="font-semibold">💨 Wind: {wind_mph} km/h</p>
              <p className="font-semibold">💧 Humidity: {humidity}%</p>
              <p className="font-semibold">🕒 Updated: {last_updated}</p>
              <p className="font-semibold">📅 Local Time: {localtime}</p>
            </div>
          </motion.div>
        ) : (
          <p className="text-white/70 mt-6 text-lg italic">
            Loading weather...
          </p>
        )}
      </motion.div>

      <footer className="mt-8 text-white/80 text-sm font-light tracking-widest">
        Built with 💙 React + Tailwind + Framer Motion <br />
        - by{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
          Shubham Kadbhane
        </span>
      </footer>
    </div>
  );
};

export default Weather;
