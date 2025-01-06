//MVC Architecture
//Model - View - Controller
//Model - Represents the data and business logic (interactions with a database)
//Controller - Handles logic for processing requests and orchestrating flow
//View - is responsible for formatting the output - For this REST api, that will be json.
const PORT = 3000;
const express = require("express");
const app = express();

const gameRoutes = require("./routes/gamesRoutes");
//const platformsRoutes = require("./routes/platformsRoutes")

app.use("/api/games", gameRoutes);
//app.use('/api/platforms', platformsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Try going to http://localhost:${PORT}/api/games`);
});
