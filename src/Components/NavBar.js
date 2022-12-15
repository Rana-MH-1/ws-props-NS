import {Navbar,Container,Nav} from "react-bootstrap";
/*import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"; */

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

//export default NavBar;
