//MVC Architecture
//Model - View - Controller
//Model - Represents the data and business logic (interactions with a database)
//Controller - Handles logic for processing requests and orchestrating flow
//View - is responsible for formatting the output - For this REST api, that will be json.
const PORT = 3000;
const path = require("path");
const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const gameRoutes = require("./routes/api/gameRoutes");
const platformRoutes = require("./routes/api/platformsRoutes");
const screenshotRoutes = require("./routes/api/screenshotsRoutes");
const gameModeRoutes = require("./routes/api/gamemodeRoutes");
const genreRoutes = require("./routes/api/genreRoutes");
const characterRoutes = require("./routes/api/characterRoutes");
const websitesRoutes = require("./routes/api/websitesRoutes");
const similarRoutes = require("./routes/api/similarRoutes");
const coverRoutes = require("./routes/api/coverRoutes");
//const platformsRoutes = require("./routes/platformsRoutes")

const homeRoute = require("./routes/views/homeRoutes");

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/gamemodes", gameModeRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/websites", websitesRoutes);
app.use("/api/similar", similarRoutes);
app.use("/api/covers", coverRoutes);
//app.use('/api/platforms', platformsRoutes);

app.use("/", homeRoute);

app.use(express.static(__dirname + "/public"));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Try going to http://localhost:${PORT}/api/games`);
    console.log(`Explorer http://localhost:${PORT}/api-docs/`);
});
