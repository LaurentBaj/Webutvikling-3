import React, {useState} from "react"

export function Task6() {
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
        <h1>Task 6: A movie object, version 2</h1>
        <label>Title</label>
        <input type="text" value={movieName} onChange={event => setMovieName(event.target.value)} />
        <label>Category</label>
        <input type="text" value={category} onChange={event => setCategory(event.target.value)} />
        <h3>Title: {movie.name}</h3>
        <p>Category: {movie.category}</p>
    </>
}