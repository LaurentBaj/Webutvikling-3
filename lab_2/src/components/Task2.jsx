import React, {useState} from "react";


export function Task2() {
    const [word, setWord] = useState()

    return <>
        <h1>Task 2: A word in a state</h1>
        <p>Word</p>
        <input type="text" onChange={ event => setWord(event.target.value) } />
        <p>The word in the state: {word}</p>
    </>
}