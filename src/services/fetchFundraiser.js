const axios = require('axios');

const fetchFundraiser = async (fundraiserID) => {
  const baseURL = `https://api.fundraise.com/v1/organizations/seven-summits-for-suicide-prevention/fundraisers/${fundraiserID}.json`
  const response = await axios.get(`${baseURL}`);
  return response.data.fundraiser;
}

export {
  fetchFundraiser,
}