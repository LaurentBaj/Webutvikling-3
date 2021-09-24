import {FC} from "react";
import {ISport} from "../../interfaces/interfaces";

const SportItem: FC<ISport> = ({name, image}) => {
    return (
        <>
            <article>
                <h3>{name}</h3>
                <img className="img-fluid" src={require(`../../assets/sports-images/${image}`).default} alt=""/>
                <p></p>
            </article>
        </>
    )
}

export default SportItem