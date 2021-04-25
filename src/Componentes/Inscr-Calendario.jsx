import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Calendario from './Calendario/Calendario'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'

export default function InscrCalendario() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron className="fondo-transparente" >
                            <h1 style={{ textAlign: "center" }}>Suscribete!</h1>
                            <h3 style={{ textAlign: "center" }} >Recibe tips gratuitos directo en tu bandeja de correo electronico</h3>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="Nombre" />
                                        <br />
                                        <Form.Control placeholder="Correo electronico" />
                                        <br />
                                        <Button style={{ float: "right" }} ><span style={{ margin: "auto 1rem" }}>Enviar</span></Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron className="fondo-transparente" >
                            <h1  style={{ textAlign: "center" }}>Calendario</h1>
                            <br/>
                            <Calendario />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
        </>
    )
}
