import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Footer() {
    return (
        <>
            {/* <Container style={{backgroundColor:"white", width:"100%", height:"5vh"}} fluid>
                <Row >
                    <Col>
                        Todos los derechos reservados
                    </Col>
                    
                </Row>
            </Container> */}
            <Navbar variant="dark" expand="lg" style={{"background-color":"#1A2A4E" }} sticky="top" >
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link  href="#home">Politica de privacidad</Nav.Link>
                        <Nav.Link href="https://github.com/willis65260">Desarrollador Jose Eduardo</Nav.Link>
                        <Nav.Link href="#link">	&copy; 2021 Alan Garcia Profesor de arte</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
