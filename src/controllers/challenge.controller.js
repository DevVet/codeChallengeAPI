// Mock repository
const data = require("../../ex.json");

const getChallenge = (req, res) => {
  let possibleQuestions = [...data];
  if (req.query.level) {
    possibleQuestions = possibleQuestions.filter(
      (question) => question.level === parseInt(req.query.level)
    );
  }
  const randomQuestion =
    possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];
  res.send(randomQuestion);
};

module.exports = {
  getChallenge,
};
