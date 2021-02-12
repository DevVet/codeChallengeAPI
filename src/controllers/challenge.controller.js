// Mock repository
const { Question } = require("../../models");

const getRandomChallenge = async (req, res) => {
  const recordCount = await Question.count();
  const randomId = Math.floor(Math.random() * recordCount)
  const randomQuestion = await Question.findOne({
    where: {
      id: randomId
    }
  });
  res.send(randomQuestion);
};

const getChallengeById = async (req, res) => {
  const question = await Question.findOne({
    where: {
      id: req.params.id
    }
  });
  res.send(question);
};

module.exports = {
  getRandomChallenge,
  getChallengeById,
};
