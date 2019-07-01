const axios = require('axios');

const fetchWeather = async (weatherLocation) => {
  const secretKey = "274cf00e552f24b5916ef21ce7c68873"
  const baseURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secretKey}/${weatherLocation}`
  const response = await axios.get(`${baseURL}`);
  return response.data;
}

export {
  fetchWeather,
}