const express = require("express");
const router = express.Router();
const genreController = require("../../controllers/api/genreController");

/**
 * @swagger
 * /api/genres:
 *   get:
 *     tags:
 *       - genres
 *     summary: Get all geres (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of geres
 */
router.get("/", genreController.getAllGenres);

/**
 * @swagger
 * /api/genres/{id}:
 *   get:
 *     tags:
 *       - genres
 *     summary: Get a genre by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific genre
 */
router.get("/:id", genreController.getGenreById);

module.exports = router;
