const express = require('express');
const axios = require('axios');

const router = express.Router();

const mockWeatherByCity = {
  hanoi: {
    city: 'Hanoi, VN',
    temperature: 31,
    humidity: 72,
    weather: 'mây rải rác',
    icon: 'https://openweathermap.org/img/wn/03d@2x.png'
  },
  'ho chi minh city': {
    city: 'Ho Chi Minh City, VN',
    temperature: 33,
    humidity: 68,
    weather: 'nắng nhẹ',
    icon: 'https://openweathermap.org/img/wn/01d@2x.png'
  },
  'da nang': {
    city: 'Da Nang, VN',
    temperature: 29,
    humidity: 80,
    weather: 'mưa nhẹ',
    icon: 'https://openweathermap.org/img/wn/10d@2x.png'
  },
  london: {
    city: 'London, GB',
    temperature: 18,
    humidity: 65,
    weather: 'trời nhiều mây',
    icon: 'https://openweathermap.org/img/wn/04d@2x.png'
  }
};

router.get('/', async (req, res) => {
  const city = req.query.city?.trim();
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const isMockMode =
    process.env.MOCK_WEATHER === 'true' ||
    !apiKey ||
    apiKey === 'your_openweather_api_key_here';

  if (!city) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a city name.'
    });
  }

  if (isMockMode) {
    // Allow students to run the project without a real API key.
    const normalizedCity = city.toLowerCase();
    const mockData = mockWeatherByCity[normalizedCity];

    if (!mockData) {
      return res.status(404).json({
        success: false,
        message: 'Mock mode chỉ hỗ trợ: Hanoi, Da Nang, Ho Chi Minh City, London.'
      });
    }

    return res.json({
      success: true,
      source: 'mock',
      data: mockData
    });
  }

  try {
    // Step 1: Convert city name into latitude and longitude.
    const geoResponse = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
      params: {
        q: city,
        limit: 1,
        appid: apiKey
      }
    });

    if (!geoResponse.data.length) {
      return res.status(404).json({
        success: false,
        message: 'City not found. Please try another city name.'
      });
    }

    const [location] = geoResponse.data;

    // Step 2: Use latitude and longitude to fetch current weather.
    const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        lang: 'vi',
        appid: apiKey
      }
    });

    const weatherData = weatherResponse.data;

    return res.json({
      success: true,
      data: {
        city: `${weatherData.name}, ${weatherData.sys.country}`,
        temperature: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        weather: weatherData.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      }
    });
  } catch (error) {
    console.error('Error while fetching weather:', error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: 'Failed to fetch weather data. Please try again later.'
    });
  }
});

module.exports = router;
