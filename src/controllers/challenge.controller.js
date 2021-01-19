// Mock repository
const data = require("../../ex.json");

const getRandomChallenge = (req, res) => {
  const question = data[Math.floor(Math.random() * data.length)];
  res.send(question);
};

const getChallengeById = (req, res) => {
  const question = data.find((obj) => obj.id === req.params.id);
  res.send(question);
};

module.exports = {
  getRandomChallenge,
  getChallengeById,
};
