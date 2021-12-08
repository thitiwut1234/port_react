import React from 'react'
import { Container , Navbar , Nav } from 'react-bootstrap'

const NavigatorBar = () => {

    return (
        <div className='Navbar'>
            <Navbar bg="dark" variant="dark" >
                <Container>
                <Navbar.Brand href="#home" class='ml-1'>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    ) ;
}

export default NavigatorBar