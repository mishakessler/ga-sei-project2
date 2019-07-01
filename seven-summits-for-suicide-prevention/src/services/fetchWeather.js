const axios = require('axios');

const latitude = '27.9881'
const longitude = '86.9250'

const secretKey = "274cf00e552f24b5916ef21ce7c68873"
const baseURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secretKey}/${latitude},${longitude}`

const fetchWeather = async () => {
  const response = await axios.get(`${baseURL}`);
  return response.data;
}

export {
  fetchWeather,
}