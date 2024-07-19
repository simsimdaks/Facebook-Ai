module.exports.config = {
  name: "quiz",
  version: "1.0",
  hasPermission: 0,
  credits: "Unknown",
  usePrefix: false,
  description: "Answer trivia questions",
  commandCategory: "Fun",
  cooldowns: 5,
};

const axios = require('axios');
const triviaData = {};

const difficultyMap = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

const categoryMap = {
  general: 9,
  books: 10,
  film: 11,
  music: 12,
  theatres: 13,
  television: 14,
  videogames: 15,
  boardgames: 16,
  science: 17,
  computers: 18,
  math: 19,
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  politics: 24,
  art: 25,
  celebrity: 26,
  animals: 27,
  vehicles: 28,
  comics: 29,
  gadgets: 30,
  anime: 31,
  cartoon: 32,
};

// Function to fetch the user's name based on senderID
async function getUserName(api, senderID) {
  const userInfo = await api.getUserInfo(senderID);
};