import { Navbar, Nav, Container } from "react-bootstrap"
import { BsFillCartFill } from "react-icons/bs";

const Navegacion = () => {
    return(
        <>
        <Navbar  variant="light">
        <Container>
          <Navbar.Brand href="#">Twicepink</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" >Inicio</Nav.Link>
            <Nav.Link href="#" >Albums</Nav.Link>
            <Nav.Link href="#" >Merch</Nav.Link>
          </Nav>
          <Nav className="carrito">
            <Nav.Link href="#"><BsFillCartFill /></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}

export default Navegacion;