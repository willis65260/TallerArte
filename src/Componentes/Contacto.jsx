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
export default function Contacto() {
    return (
        <>
            <Jumbotron className="fondo-transparente" >
                <h1 style={{ textAlign: "center" }}>Contacto</h1>
                <h3 style={{ textAlign: "center" }} >Ponte en contacto con nosotros para recibir mas informacion o aclarar dudas</h3>
                <Container>

                    <Row>
                        <Col>
                            <Jumbotron className="fondo-transparente">
                                <h3 style={{ textAlign: "center" }} >Enviame directamente un correo</h3>
                                <Form.Control placeholder="Nombre" />
                                <br />
                                <Form.Control placeholder="Correo electronico" />
                                <br />
                                <Form.Control placeholder="Tipo de cuarto de interes" />
                                <br />
                                <Form.Control placeholder="Distrito" />
                                <br />
                                <Form.Control placeholder="Numero telefonico" />
                                <br />
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} placeholder="Mensaje..." />
                                </Form.Group>
                                <br />
                                <Button style={{ float: "right" }} ><span style={{ margin: "auto 1rem" }}>Enviar</span></Button>
                            </Jumbotron>
                        </Col>
                        <Col>
                            <Jumbotron className="fondo-transparente">
                                <h1>
                                    Whatsapeame al telefono
                                </h1>
                                <h1> +51 943 047 804 </h1>
                                <h1>y te atenderé lo mas pronto posible :D</h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}
