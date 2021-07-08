import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Route from "react-router-dom";
import App from '../App'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {

    return (
        <>
            <Navbar variant="dark" expand="lg" style={{ "background-color": "rgb(75,54,33)" }} sticky="top" >
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        
                        <Nav.Link href="#link1">Actividades</Nav.Link>

                        <Nav.Link href="#link3">Fechas</Nav.Link>
                        <Nav.Link href="#link6">Suscripcion</Nav.Link>

                        <Nav.Link href="#link2">Cursos</Nav.Link>
                        <Nav.Link href="#link4">Instalaciones</Nav.Link>
                        <Nav.Link href="#link5">Contacto</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
