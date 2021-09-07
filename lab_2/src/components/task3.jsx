import {useState} from "react";

export function Task3() {
    let [sum, setSum] = useState(0)
    let [input, setInput] = useState(0)

    function calculate(operation) {
        if (operation === "+") setSum(parseInt(sum) + parseInt(input))
        else { setSum(parseInt(sum) - parseInt(input)) }
    }

    return <>
        <h1>Task 3: Let the user decide numbers to add</h1>
        <textarea value={input} onChange={ event => setInput(event.target.value) }/>
        <button onClick={ () => calculate("+") }>Add Number</button>
        <button onClick={ () => calculate("-") }>Subtract Number</button>
        <p>The sum: {sum}</p>
    </>
}