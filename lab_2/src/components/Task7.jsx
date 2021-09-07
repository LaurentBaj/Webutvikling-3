import React, {useState} from "react";



export function Task7() {
    const [country, setCountry] = useState("")
    const [capital, setCapital] = useState("")

    const [output, setOutput] = useState([]) // Object array

    function createCountries() {
        if (country && capital) {
            setOutput([...output, {
                id: output.length,
                country: country,
                capital: capital
            }])
        }
        setCountry("")
        setCapital("")
    }

    return <>
        <h1>Task 7, Countries.js: Adding objects to an array</h1>
        <h4>Add countries and their capitals</h4>
        <p>Number of countries: {output.length}</p>
        <label>Country</label>
        <input type="text" value={country} onChange={e => setCountry(e.target.value)}/>
        <label>Capital</label>
        <input type="text" value={capital} onChange={e => setCapital(e.target.value)}/>
        <button onClick={createCountries}>Add country</button>
        <ul>
            {output.map( c => (
                <li key={c.id}>Country: {c.country}, capital: {c.capital}</li>
            ))}
        </ul>
    </>
}