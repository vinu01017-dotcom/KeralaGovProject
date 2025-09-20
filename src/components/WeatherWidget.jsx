import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Droplets } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temperature: 28,
    condition: 'sunny',
    humidity: 75,
    windSpeed: 12,
    location: 'Kochi, Kerala'
  });

  const getWeatherIcon = (condition) => {
    const iconProps = { className: "w-12 h-12 weather-icon" };
    
    switch (condition) {
      case 'sunny':
        return <Sun {...iconProps} className="w-12 h-12 text-yellow-500 weather-icon" />;
      case 'cloudy':
        return <Cloud {...iconProps} className="w-12 h-12 text-gray-500 weather-icon" />;
      case 'rainy':
        return <CloudRain {...iconProps} className="w-12 h-12 text-blue-500 weather-icon" />;
      case 'snowy':
        return <CloudSnow {...iconProps} className="w-12 h-12 text-blue-300 weather-icon" />;
      default:
        return <Sun {...iconProps} className="w-12 h-12 text-yellow-500 weather-icon" />;
    }
  };

  const getWeatherGradient = (condition) => {
    switch (condition) {
      case 'sunny':
        return 'from-yellow-400 to-orange-500';
      case 'cloudy':
        return 'from-gray-400 to-gray-600';
      case 'rainy':
        return 'from-blue-400 to-blue-600';
      case 'snowy':
        return 'from-blue-200 to-blue-400';
      default:
        return 'from-yellow-400 to-orange-500';
    }
  };

  // Simulate weather updates
  useEffect(() => {
    const conditions = ['sunny', 'cloudy', 'rainy'];
    const interval = setInterval(() => {
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemp = Math.floor(Math.random() * 10) + 25; // 25-35°C
      const randomHumidity = Math.floor(Math.random() * 30) + 60; // 60-90%
      const randomWind = Math.floor(Math.random() * 15) + 5; // 5-20 km/h
      
      setWeather(prev => ({
        ...prev,
        condition: randomCondition,
        temperature: randomTemp,
        humidity: randomHumidity,
        windSpeed: randomWind
      }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 h-96 glass-effect border-emerald-200">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4">Weather Report</h2>
      
      <div className="space-y-6">
        {/* Main Weather Display */}
        <motion.div
          key={weather.condition}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${getWeatherGradient(weather.condition)} rounded-xl p-6 text-white`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">{weather.location}</p>
              <p className="text-4xl font-bold">{weather.temperature}°C</p>
              <p className="text-sm capitalize opacity-90">{weather.condition}</p>
            </div>
            <motion.div
              animate={{ rotate: weather.condition === 'sunny' ? 360 : 0 }}
              transition={{ duration: 2, repeat: weather.condition === 'sunny' ? Infinity : 0, ease: "linear" }}
            >
              {getWeatherIcon(weather.condition)}
            </motion.div>
          </div>
        </motion.div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 rounded-lg p-4 text-center"
          >
            <Droplets className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-blue-600 font-medium">Humidity</p>
            <p className="text-xl font-bold text-blue-800">{weather.humidity}%</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 rounded-lg p-4 text-center"
          >
            <Wind className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-600 font-medium">Wind Speed</p>
            <p className="text-xl font-bold text-green-800">{weather.windSpeed} km/h</p>
          </motion.div>
        </div>

        {/* Weather Forecast */}
        <div className="bg-emerald-50 rounded-lg p-4">
          <p className="text-sm font-medium text-emerald-800 mb-2">Today's Forecast</p>
          <p className="text-xs text-emerald-600">
            Perfect weather for exploring Kerala's beautiful destinations! 
            {weather.condition === 'rainy' && ' Don\'t forget your umbrella!'}
            {weather.condition === 'sunny' && ' Great day for outdoor activities!'}
            {weather.condition === 'cloudy' && ' Comfortable weather for sightseeing!'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherWidget;