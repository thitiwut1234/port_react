import React from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import './Navbar.css'

const NavigatorBar = () => {

    return (
        <div className='Navbar'>
            <Navbar bg="dark" variant="dark" >
                {/* <Container> */}
                <Navbar.Brand href="/" class='ml-1'>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {/* </Container> */}
            </Navbar>
        </div>
    ) ;
}

export default NavigatorBar