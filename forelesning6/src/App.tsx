import React from 'react';
import {RickAndMortyProvider} from "./context/RickAndMortyContext";
import {CharacterList} from "./components/CharacterList";
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
    return (
        <>
            <Container fluid>
                <RickAndMortyProvider>
                    <CharacterList />
                </RickAndMortyProvider>
            </Container>
        </>
    )
}

export default App;
