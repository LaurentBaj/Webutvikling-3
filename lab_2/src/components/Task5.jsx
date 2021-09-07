import React, {useState} from "react"

export function Task5() {
    // Input Fields
    let [movieName, setMovieName] = useState()
    let [category, setCategory] = useState()

    let [movie, setMovie] = useState({}) // 'Singleton'

    function action() {
        if (movieName && category) {
            setMovie(movie = { // Replace vals
                name: movieName,
                category: category
            })
        }
        setMovieName("")
        setCategory("")
    }

    return <>
        <h1>Task 5: A movie object, version 1</h1>
        <label>Title</label>
        <input type="text" value={movieName} onChange={event => setMovieName(event.target.value)} />
        <label>Category</label>
        <input type="text" value={category} onChange={event => setCategory(event.target.value)} />
        <button onClick={action}>Set movie</button>
        <h3>Title: {movie.name}</h3>
        <p>Category: {movie.category}</p>
    </>
}