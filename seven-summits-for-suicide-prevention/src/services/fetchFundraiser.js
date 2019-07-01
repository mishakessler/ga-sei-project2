const axios = require('axios');

const baseURL = "https://api.fundraise.com/v1/organizations/seven-summits-for-suicide-prevention/fundraisers/misha-kessler.json"

const fetchFundraiser = async () => {
  const response = await axios.get(`${baseURL}`);
  return response.data.fundraiser;
}

export {
  fetchFundraiser,
}