import './Navbar.scss'
import logo from './media/LogoComuneBrescia.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BasicNavbar=()=>{
    return (
        <Navbar bg="light" expand="lg">
          <Container>
          <img class="nav-logo" src={logo}/>
            <Navbar.Brand href="#home">Comune di Brescia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#meteo">Meteo</Nav.Link>
                <Nav.Link href="#mappa">Mappa del sito</Nav.Link>
                <Nav.Link href="#aiuto">Aiuto</Nav.Link>
                <Nav.Link href="#privacy">Privacy</Nav.Link>
              </Nav>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}


export default BasicNavbar;