const express = require("express");
const router = express.Router();
const websiteController = require("../controllers/websiteController");

/**
 * @swagger
 * /api/websites:
 *   get:
 *     tags:
 *       - websites
 *     summary: Get all websites (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of websites
 */
router.get("/", websiteController.getAllWebsites);

/**
 * @swagger
 * /api/websites/{id}:
 *   get:
 *     tags:
 *       - websites
 *     summary: Get a website by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific website
 */
router.get("/:id", websiteController.getWebsiteById);

module.exports = router;
