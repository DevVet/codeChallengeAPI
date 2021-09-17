const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello World");
});

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test Hello World Route
 */

/**
 * @swagger
 * path:
 *  /:
 *    get:
 *      summary: Get Hello World String
 *      description: Get Hello World String.
 *      tags: [Test]
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                properties:
 *                  results:
 *                    type: string
 */
