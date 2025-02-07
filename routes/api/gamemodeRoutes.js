const express = require("express");
const router = express.Router();
const gameModeController = require("../../controllers/api/gamemodeController");

/**
 * @swagger
 * /api/gamemodes:
 *   get:
 *     tags:
 *       - game modes
 *     summary: Get all game modes (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of game modes
 */
router.get("/", gameModeController.getAllGameModes);

/**
 * @swagger
 * /api/gamemodes/{id}:
 *   get:
 *     tags:
 *       - game modes
 *     summary: Get a game mode by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific game mode
 */
router.get("/:id", gameModeController.getGameModeById);

module.exports = router;
