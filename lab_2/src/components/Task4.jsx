import React, {useState} from "react";


export function Task4() {
    let [list, setList] = useState([])
    let [hero, postHero] = useState("")

    function addHero() {
        setList([...list, hero]) // param1: array ref, param2: values
        postHero("")
    }

    return <>
        <h1>Task 4: Add Superheroes</h1>
        <p>Superhero name</p>
        <input type="text" value={hero} onChange={event => postHero(event.target.value)}/>
        <button onClick={addHero}>Add superhero</button>
        <ul>
            { list.map(e => ( <li>{e}</li>)) }
        </ul>
    </>
}