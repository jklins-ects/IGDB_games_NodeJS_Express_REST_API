const express = require("express");
const router = express.Router();
const similarController = require("../../controllers/api/similarController");

/**
 * @swagger
 * /api/similar:
 *   get:
 *     tags:
 *       - similar
 *     summary: Get all similar games (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of similar games
 */
router.get("/", similarController.getAllSimilarGames);

/**
 * @swagger
 * /api/similar/{id}:
 *   get:
 *     summary: Get similar games by  game id
 *     tags:
 *       - similar
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A list of similar games
 */
router.get("/:id", similarController.getSimilarByGameId);

module.exports = router;
