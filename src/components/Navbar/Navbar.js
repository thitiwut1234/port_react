import React from 'react'
import { Navbar , Nav } from 'react-bootstrap'
import './Navbar.css'

const NavigatorBar = () => {

    return (
        <div className='Navbar'>
            <Navbar bg="dark" variant="dark" >
                {/* <Container> */}
                <Navbar.Brand href="/" className='Navbra'>Home</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="#features">Education</Nav.Link>
                <Nav.Link href="#pricing">Skill</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                {/* </Container> */}
            </Navbar>
        </div>
    ) ;
}

export default NavigatorBar