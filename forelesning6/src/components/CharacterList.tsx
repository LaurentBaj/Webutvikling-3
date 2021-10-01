import { FC, useContext } from "react"
import {RickAndMortyContex} from "../context/RickAndMortyContext";
import {rickAndMortyTypes} from "../types/rickAndMortyTypes";
import {Col, Row} from "react-bootstrap";
import {ICharacter} from "../interfaces/ICharacter";
import {CharacterItem} from "./CharacterItem";

export const CharacterList:FC = () => {
    const {characters} = useContext(RickAndMortyContex) as rickAndMortyTypes

    return (
        <Row>
            {characters.map( (character: ICharacter, key: number) => {
                return <Col xs={12} sm={6} md={4} lg={3} key={key}>
                    <CharacterItem
                        id={character.id}
                        name={character.name}
                        species={character.species}
                        image={character.image}
                    />
                </Col>
            })}
        </Row>
    )
}
