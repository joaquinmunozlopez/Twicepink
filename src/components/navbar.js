import { Navbar, Nav, Container } from "react-bootstrap"
import { BsFillCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navegacion = () => {
    return(
        <>
        <Navbar  variant="light">
        <Container>
          <Navbar.Brand href="#">Twicepink</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="link" to={"/"} >Inicio</NavLink>
            <NavLink className="link" to={"/Albumes"} >Albumes</NavLink>
            <NavLink className="link" to={"/"} >Merch</NavLink>
          </Nav>
          <Nav className="carrito">
            <NavLink className="link" to={"/"} ><BsFillCartFill /></NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}

export default Navegacion;