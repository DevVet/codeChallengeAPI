const { Question } = require("../../models");

const getChallenge = async (req, res) => {
  let recordChoiceIds = await Question.findAll({
    attributes: ['id'],
    where: req.query.level ? { level: parseInt(req.query.level)} : {}
  });
  recordChoiceIds = recordChoiceIds.map(record => record.dataValues.id)

  const randomId = recordChoiceIds[Math.floor(Math.random() * recordChoiceIds.length)]
  
  const chosenQuestion = await Question.findOne({
    where: {
      id: randomId
    }
  });
  res.send(chosenQuestion);
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
  getChallenge,
  getChallengeById,
};
