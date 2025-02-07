const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
    const response = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`
    );
    data = response.data;
    const cover = await endPointWithGameID("covers", req.params.id);
    data.cover = cover[0] ? cover[0].url : "";

    data.genres = await endPointWithGameID("genres", req.params.id);
    res.render("game", {
        title: "Games!",
        gameData: data,
    });
}

async function endPointWithGameID(endpoint, gameId) {
    const values = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
        {
            params: { gameid: gameId },
        }
    );
    return values.data;
}

module.exports = { renderGamePage };
