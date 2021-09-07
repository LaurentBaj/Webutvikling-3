import React, {useState} from "react"


export function Task1() {
    let [value, setValue] = useState(0)
    let [counter, setCounter] = useState(0)

    function valueAction(operation) {
        if (operation === "+") setValue(value += 200)
        else { setValue(value -= 200) }
        setCounter(counter + 1)
    }


    return <>
        <h1>Task 1</h1>
        <button onClick={ () => valueAction("+") }>+</button>
        <p>{value}</p>
        <button onClick={ () => valueAction("-") }>-</button>
        <p>Number of times clicked: {counter}</p>
    </>
}