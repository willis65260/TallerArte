import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Route from "react-router-dom";
import App from '../App'
import {LinkContainer} from 'react-router-bootstrap'

export default function Header() {

    return (
        <>
            <Navbar variant="dark" expand="lg" style={{ "background-color": "#1A2A4E" }} sticky="top" >
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <LinkContainer to={{
                            hash:"Footer"
                        }}>
                            <Nav.Link href="#">Actividades</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="#">Fechas</Nav.Link>
                        <Nav.Link href="#">Cursos</Nav.Link>
                        <Nav.Link href="#">Instalaciones</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
