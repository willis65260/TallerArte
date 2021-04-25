import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return (
        <>
            <Navbar variant="dark" expand="lg" style={{"background-color":"#1A2A4E" }} sticky="top" >
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link  href="#home">Actividades</Nav.Link>
                        <Nav.Link href="#link">Fechas</Nav.Link>
                        <Nav.Link href="#link">Cursos</Nav.Link>
                        <Nav.Link href="#link">Instalaciones</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
