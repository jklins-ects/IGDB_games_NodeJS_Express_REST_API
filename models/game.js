const db = require("../config/db");

async function getAllGames(start = 0, limit = 50, like) {
    let where = "";
    const params = [];

    if (like) {
        where = ` WHERE name LIKE ? `;
        params.push(`%${like}%`);
    }

    params.push(start.toString(), limit.toString());

    const [rows] = await db.execute(
        `SELECT * FROM games ${where} LIMIT ?, ?`,
        params
    );

    return rows;
}

async function getGameById(gameId) {
    const [rows] = await db.execute("Select * from games WHERE game_id = ?", [
        gameId,
    ]);
    return rows[0];
}

module.exports = { getAllGames, getGameById };
