import React, {useState} from "react"

export function Task6() {
    // Input Fields
    let [movieName, setMovieName] = useState()
    let [category, setCategory] = useState()

    let [movie, setMovie] = useState({})

    function changeName(event) {
        setMovieName(event.target.value)
        setMovie({...movie, name: movieName})
    }

    function changeCategory(event) {
        setCategory(event.target.value)
        setMovie({...movie, category: category})
    }

    return <>
        <h1>Task 6: A movie object, version 2</h1>
        <label>Title</label>
        <input type="text" value={movieName} onChange={changeName} />
        <label>Category</label>
        <input type="text" value={category} onChange={changeCategory} />
        <h3>Title: {movie.name}</h3>
        <p>Category: {movie.category}</p>
    </>
}