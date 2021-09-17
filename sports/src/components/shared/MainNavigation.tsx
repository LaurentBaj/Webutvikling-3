import {FC} from "react";
import {Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavigation:FC = () => {
    return (
        <Navbar bg={"dark"} variant={"dark"}>
            <Container>
                <Navbar.Brand>Sports</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavigation