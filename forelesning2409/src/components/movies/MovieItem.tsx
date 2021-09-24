import {FC} from "react";
import {IMovie} from "../../interfaces/IMovie";

export const MovieItem:FC<IMovie> = ({title}) => {
    return (
        <article>
            <h3>{title}</h3>
        </article>
    )
}