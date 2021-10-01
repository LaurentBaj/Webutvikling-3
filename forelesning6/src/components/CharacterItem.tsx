import { FC } from "react"
import { Card } from "react-bootstrap";
import {ICharacter} from "../interfaces/ICharacter";

export const CharacterItem:FC<ICharacter> = ({id, name, species, image}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Art: {species}
                </Card.Text>
                <Card.Img src={image}/>
            </Card.Body>
        </Card>
    )
}