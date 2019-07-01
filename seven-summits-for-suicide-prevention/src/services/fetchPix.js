const axios = require('axios');

const query = ''
const queryURL = encodeURIComponent(query)
const key = '12896996-4b7f5a90396937631469651c1'
const baseURL = `https://pixabay.com/api/?${key}&q=${queryURL}&image_type=photo`

const fetchPix = async () => {
  const response = await axios.get(`${baseURL}`);
  debugger;
  return response.data;
  debugger;
  console.log(response.data)
}

export {
  fetchPix,
}