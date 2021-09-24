import {FC, useContext, useEffect} from "react";
import {MovieContext} from "../../contexts/MovieContext";
import {MovieContextType} from "../../types/MovieContextType";
import {MovieItem} from "./MovieItem";
import {IMovie} from "../../interfaces/IMovie";

export const MovieList:FC = () => {
    const {movies} = useContext(MovieContext) as MovieContextType;

    useEffect(() => {

    },[movies])

    const createMovieList = () => {
        return movies.map( (movie:IMovie, key:number) => {
            return <MovieItem title={movie.title} key={key} />
        })
    }


    return (
        <section>
            {createMovieList()}
        </section>
    )
}