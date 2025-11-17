import React from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
// Navigation bar with Bootstrap components
function NavBar(){
    return(
        <>
            <Navbar expand="lg" fixed="top" className="custom-navbar">
                <Container>
                    <Navbar.Brand >Pets Adoption</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#cardpets">Availabale Pets</Nav.Link>
                        <Nav.Link href="#form">Adoption</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
// Contains anchor links for scrolling to sections
// Fixed-top behavior + custom background style
export default NavBar;        