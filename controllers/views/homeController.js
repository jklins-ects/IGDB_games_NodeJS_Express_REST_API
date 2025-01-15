const axios = require("axios");
const settings = require("../../config/settings");
async function renderHomePage(req, res) {
    const response = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/games`,
        { params: req.query }
    );

    const data = response.data;
    for (game of data) {
        const cover = await axios.get(
            `${settings.ROOT}:${settings.PORT}/api/covers`,
            { params: { gameid: game.game_id } }
        );
        game.cover = cover.data[0] ? cover.data[0].url : "";
    }
    res.render("home", {
        title: "Games!",
        search: req.query.like ? req.query.like : "",
        gameData: data,
    });
}

module.exports = { renderHomePage };
