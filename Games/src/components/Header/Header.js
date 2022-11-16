import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss"

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} className="bg-white text-dark">
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title>Catalogo Giochi</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Link className="nav-link text-dark" onClick={handleClose} to="/">Home</Link>
                        <Link className="nav-link text-dark" onClick={handleClose} to="/games">Giochi</Link>
                        <Link className="nav-link text-dark" onClick={handleClose} to="/categories">Categorie</Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;