const express = require("express");
const router = express.Router();
const screenshotController = require("../controllers/screenshotController");

router.get("/", screenshotController.getAllScreenshots);
router.get("/:id", screenshotController.getScreenshotById);

module.exports = router;
