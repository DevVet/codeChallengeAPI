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

/**
 * @swagger
 * tags:
 *   name: Challenges
 *   description: Challenge Retreival
 */

/**
 * @swagger
 * path:
 *  /challenge:
 *    get:
 *      summary: Get a random challenge
 *      description: Get a random challenge.
 *      tags: [Challenges]
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  results:
 *                    type: object
 *                    items:
 *                      $ref: '#/components/schemas/Challenge'
 */

/**
 * @swagger
 * path:
 *  /challenge/{id}:
 *    get:
 *      summary: Get a specified Challenge
 *      description: Get a specified Challenge.
 *      tags: [Challenges]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Challenge id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Challenge'
 */
