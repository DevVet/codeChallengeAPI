// Mock repository
const data = require("../../ex.json");

const getRandomChallenge = (req, res) => {
  let options = [...data];
  if (req.query.level) {
    options = options.filter(
      (question) => question.level === parseInt(req.query.level)
    );
  }
  res.send(options[Math.floor(Math.random() * options.length)]);
};

const getChallengeById = (req, res) => {
  const question = data.find((obj) => obj.id === parseInt(req.params.id));
  res.send(question);
};

module.exports = {
  getRandomChallenge,
  getChallengeById,
};
