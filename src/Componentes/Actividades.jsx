import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
export default function Actividades() {
    return (
        //Actividades
        <>
            <Container fluid>
                <Row>
                    <Col >
                        <br />
                        <h1 style={{ textAlign: "center" }}>Tipos de cuartos</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid>

                <Row xs="1" sm="1" md="1" lg="2" xl="2">
                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar">
                                <br />
                                <Row>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>Con baño compartido</h1>
                                        <p>
                                        Este tipo de cuarto es muy economico y te puedes mudar en seguida ideal si no te molesta tener un baño compartido con varias personas.
                                        </p>
                                    </Col>

                                </Row>
                                <br />
                            </Container >
                        </Jumbo>
                    </Col>

                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar" >
                                <br />
                                <Row>

                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>Con baño propio</h1>
                                        <p>
                                            Este cuarto es ideal si deseas disfrutar de tu privacidad al 100% no tendras problemas con esperar el baño con los demas inquilinos, ya que posees uno propio el precio se incrementa un poco pero sigue siendo de los mas economicos del mercado.
                                        </p>
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