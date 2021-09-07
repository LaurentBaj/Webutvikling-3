import React, {useState} from "react"


export function Counter() {
    let [counter, setCounter] = useState(0)

    function counterAction(operation) {
        if (operation === "+") setCounter(counter++)
        else { setCounter(counter--) }
    }

    return <>
        <h1>Task 1</h1>
        <button onClick={() => counterAction("+")}>+</button>
        <p>{counter}</p>
        <button onClick={() => counterAction("-")}>-</button>
    </>
}