import React, {useState} from "react";
import {GameItem} from "./GameItem";

export function GameForm() {
    const [title, setTitle] = useState("")
    const [games, setGames] = useState([])

    function addGame() {
        setGames([...games, title])
        setTitle("")
    }

    return <>
        <h1>Games</h1>
        <h2>Add Games To Your List</h2>
        <p>Amount of games: {games.length}</p>
        <label>Title</label>
        <input type="text" value={title} onChange={ e => {setTitle(e.target.value)} } />
        <button onClick={addGame}>Add Game</button>
        <h2>Your Games</h2>
        <ul>
            {games.map((game, key) => (
                <GameItem name={game} key={key} />
            ))}
        </ul>
    </>
}