import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Header =()=>{
    return(
       <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to='/'>Routing App</Link>
          <Nav className="me-auto">
            <Link className="nav-link" to='/' >Home</Link>
            <Link className="nav-link" to='/blog'>Blog</Link>
            <Link className="nav-link" to ='/about'>About</Link>
            <Link className="nav-link" to ='/blog/article'>Article</Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    );
}

export default Header;