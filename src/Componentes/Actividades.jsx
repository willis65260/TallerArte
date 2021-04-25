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
                        <h1 style={{ textAlign: "center" }}>Actividades</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid>

                <Row xs="1" sm="1" md="1" lg="2" xl="3">
                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar">
                                <br />
                                <Row>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>Pintura</h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
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
                                        <h1 style={{ textAlign: "center" }}>Acuarelas</h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
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
                                        <h1 style={{ textAlign: "center" }}>Dibujo</h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                            </Container >
                            {/* <Button variant="info" style={{ float: "right", margin: "1rem", paddingLeft: "1rem", paddingRight: "1rem" }} >Ver Mas</Button> */}
                        </Jumbo>
                    </Col>
                </Row>
            </Container>
        </>
    )
}