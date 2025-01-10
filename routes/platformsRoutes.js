const express = require("express");
const router = express.Router();
const plaformController = require("../controllers/platformController");

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *       - platforms
 *     summary: Get all characters (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of platforms
 */
router.get("/", plaformController.getAllPlatforms);

/**
 * @swagger
 * /api/platforms/{id}:
 *   get:
 *     tags:
 *       - platforms
 *     summary: Get a platform by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific platform
 */
router.get("/:id", plaformController.getPlatformById);

module.exports = router;
