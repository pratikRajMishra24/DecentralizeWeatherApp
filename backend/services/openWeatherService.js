const axios = require('axios');
const { logWeather } = require('./blockchainLogger');

async function getWeatherAndLog(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);
  const data = response.data;

  const description = data.weather[0].description;
  const temperature = data.main.temp;

  const txHash = await logWeather(city, description, temperature);

  return { city, description, temperature, txHash };
}

module.exports = { getWeatherAndLog };
