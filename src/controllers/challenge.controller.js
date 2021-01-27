// Mock repository
const data = require("../../ex.json");

const getChallenge = (req, res) => {
  let options = [...data];
  if (req.query.level) {
    options = options.filter(
      (question) => question.level === parseInt(req.query.level)
    );
  }
  res.send(options[Math.floor(Math.random() * options.length)]);
};

module.exports = {
  getChallenge,
};
