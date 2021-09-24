import {IMovie} from "../interfaces/IMovie";

export type MovieContextType = {
    movies: IMovie[];
    saveMovie: (newMovie: IMovie) => void
}
