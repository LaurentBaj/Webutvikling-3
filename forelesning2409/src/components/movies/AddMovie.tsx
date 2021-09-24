import {FC, useContext, useState} from "react";
import {MovieContext} from "../../contexts/MovieContext";
import {MovieContextType} from "../../types/MovieContextType";

export const AddMovie:FC = () => {
    const [title, setTitle] = useState("")
    const { movies, saveMovie } = useContext(MovieContext) as MovieContextType

    return (
        <section>
            <h2>Legg til en ny film</h2>
            <label>Tittel</label>
            <input value={title} onChange={e => {setTitle(e.target.value)}}  type="text"/>
            <button onClick={() => saveMovie({title:title})}>Submit</button>
            <p>Antall filmer i databasen {movies.length}</p>
        </section>
    )
}