import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarPortfolio = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-success bg-gradient">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='mx-5 text-white'>Qui-suis-je</Nav.Link>
                            <Nav.Link href="/Cv" className='mx-5 text-white'>CV</Nav.Link>
                            <Nav.Link href="/competences" className='mx-5 text-white'>Compétences</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <style>
    {`
    .navbar-nav .nav-link:hover {
        transform: scale(1.2); !important
    }
    `}
</style>


        </>
    );
};

export default NavbarPortfolio;
