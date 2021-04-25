import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import img1 from '../Recusos/Imagenes/nios-pintando.jpg'
import img2 from '../Recusos/Imagenes/adulto-pintando.jpg'


//! put a tabbed interface aqui para dsplegar Actividades, Material y Costo <-- seria buena idea
export default function Cursos() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col >
                        <br />
                        <h1 style={{ textAlign: "center" }}>Cursos</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row xs="1" sm="1" md="1" lg="2" xl="2">
                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar altura700">
                                <br />
                                <Row>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>Cursos para Niños</h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
                                        </p>
                                        <Button variant="info" >Ver Mas</Button>
                                    </Col>
                                    <Col xs={5}>
                                        <Image src={img1} className="altura300" rounded />
                                    </Col>
                                </Row>
                                <br />
                            </Container >

                        </Jumbo>
                    </Col>

                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar " >
                                <br />
                                <Row>
                                    <Col xs={5}>
                                        <Image src={img2} width="100%" rounded />
                                    </Col>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>Cursos para Adultos</h1>
                                        <p style={{ textAlign: "right" }}>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
                                        </p>
                                        <div>
                                            <Button variant="info" style={{ float: "right" }} >Ver Mas</Button>
                                        </div>
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
