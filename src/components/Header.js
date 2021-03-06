import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >
                        Y'RFAV
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav className="mr-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>

                    <LinkContainer to="/cart">
                        <Nav.Link ><i className="fas fa-shopping-cart "></i> Cart</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/login">
                         <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                    </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default header
