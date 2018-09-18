const axios = require('axios');

const API_SERVER = 'http://localhost:3000'; // local
// const API_SERVER = ""; // prod

async function getAvailableQuizs() {
  const response = await axios.get(`${API_SERVER}/api/quizs`);
  return response.data;
};

async function getQuizById(id) {
  const response = await axios.get(`${API_SERVER}/api/quizs/${id}`);
  return response.data;
};

module.exports = {
  getAvailableQuizs,
  getQuizById,
};
