import { FC, useState, createContext } from "react";
import {IMovie} from "../interfaces/IMovie";
import {MovieContextType} from "../types/MovieContextType";


export const MovieContext = createContext<MovieContextType | null>(null)

export const MovieProvider:FC = ({children}) => {
    const [movies, setMovies] = useState<IMovie[]>([
        {title: "Dune"},
        {title: "Batman"},
        {title: "Boss Baby"},
        {title: "Free Guy"}
    ])

    const saveMovie = () => {

    }

    return (
        <>
            <MovieContext.Provider value={{movies, saveMovie}}>
                {children}
            </MovieContext.Provider>
        </>
    )
}