const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { questionService } = require('../services');

const getQuestions = async (res, res) => {
  const result =  await questionService.queryQuestions();
  return res.send(results)
}

module.exports = {
  getQuestions
};
