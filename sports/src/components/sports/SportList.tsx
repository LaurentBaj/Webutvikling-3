import { FC, useState } from "react";
import {ISport} from "../../interfaces/interfaces";
import { Container, Row, Col} from "react-bootstrap";
import SportItem from "./SportItem";

const SportList: FC = () => {

    const [sports] = useState<Array<ISport>>(
        [
            {name: "Boxing", image: "boxing.jpg"},
            {name: "Cycling", image: "cycling.JPG"},
            {name: "Football", image: "football.jpg"},
            {name: "Volleyball", image: "volleyball.jpg"}
        ]
    );

    const createSportList = () => {
        return sports.map( (sport, key) => {
            return (
                <Col md={6} lg={4} xl={3} key={key}>
                    <SportItem name={sport.name} image={sport.image} />
                </Col>
            )
        } )
    }

    return (
        <>
            <Container>
                <Row>
                    { createSportList() }
                </Row>
            </Container>
        </>
    )
}

export default SportList;

