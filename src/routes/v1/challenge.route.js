const express = require("express");
const router = express.Router();
const challengeController = require("../../controllers/challenge.controller");

router
  .route("/")
  .get((req, res) => challengeController.getRandomChallenge(req, res));

router
  .route("/:id")
  .get((req, res) => challengeController.getChallengeById(req, res));

module.exports = router;
