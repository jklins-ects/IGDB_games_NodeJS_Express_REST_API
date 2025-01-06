const db = require("../config/db");

async function getAllGames(start = 0, limit = 50) {
    const [rows] = await db.execute("Select * from games Limit ?,?", [
        start,
        limit,
    ]);
    return rows;
}

async function getGameById(gameId) {
    const [rows] = await db.execute("Select * from games WHERE game_id = ?", [
        gameId,
    ]);
    return rows[0];
}

module.exports = { getAllGames, getGameById };
