const express = require("express");
const router = express.Router();
const screenshotController = require("../../controllers/api/screenshotController");

/**
 * @swagger
 * /api/screenshots:
 *   get:
 *     tags:
 *       - screenshots
 *     summary: Get all screenshots (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of screenshots
 */
router.get("/", screenshotController.getAllScreenshots);

/**
 * @swagger
 * /api/screenshots/{id}:
 *   get:
 *     tags:
 *       - screenshots
 *     summary: Get a screenshot by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific screenshot
 */
router.get("/:id", screenshotController.getScreenshotById);

module.exports = router;
