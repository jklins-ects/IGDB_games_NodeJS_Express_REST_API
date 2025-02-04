const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
    const response = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`
    );
    data = response.data;
    const cover = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/covers`,
        {
            params: { gameid: req.params.id },
        }
    );
    data.cover = cover.data[0] ? cover.data[0].url : "";

    res.render("game", {
        title: "Games!",
        gameData: data,
    });
}
module.exports = { renderGamePage };
