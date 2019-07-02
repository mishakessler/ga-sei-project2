const axios = require('axios');

const fetchPix = async (pixQuery) => {
  const queryURL = encodeURIComponent(pixQuery)
  const key = '12896996-4b7f5a90396937631469651c1'
  const baseURL = `https://pixabay.com/api/?key=${key}&q=${queryURL}&image_type=photo`
  const response = await axios.get(`${baseURL}`);
  return response.data.hits;
}

export {
  fetchPix,
}