import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import img1 from '../RecursosCuartos/edificio-1.jpeg'


//! Cambiar el tamaño de la letra con el tamaño de la pantalla
export default function Cuerpo() {
    return (
        <>
            <Container fluid>
                <Row xs="1" sm="1" md="1" lg="1" xl="1">
                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar">
                                <br />
                                <Row>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>Cuartos en renta!</h1>
                                        <p>
                                            Perfectos para estudiantes, o cualquier persona que quiera vivir en un departamento de calidad...(mas texto)
                                        </p>
                                        {/* <Button variant="info" >Ver Mas</Button> */}
                                    </Col>
                                    <Col xs={5}>
                                        <Image src={img1} width="100%" rounded />
                                    </Col>
                                </Row>
                                <br />
                            </Container >

                        </Jumbo>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
