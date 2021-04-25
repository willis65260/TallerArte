import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import img1 from '../Recusos/Imagenes/profesor-arte.jpg'


//! Cambiar el tamaño de la letra con el tamaño de la pantalla
export default function Cuerpo() {
    return (
        <>
            <Container fluid>
                <Row xs="1" sm="1" md="1" lg="2" xl="2">
                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar">
                                <br />
                                <Row>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>¿Que es?</h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
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

                    <Col>
                        <Jumbo className="fondo-transparente">

                            <Container className="fondo-resaltar" >
                                <br />
                                <Row>
                                    <Col xs={5}>

                                        <Image src={img1} width="100%" rounded />
                                    </Col>
                                    <Col>
                                        <h1 style={{ textAlign: "center" }}>¿Quien lo impartira?</h1>
                                        <p style={{ textAlign: "right" }}>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati dolore laudantium dicta! Quas, labore molestiae facilis cupiditate quo similique ex cumque sapiente consequatur modi aut eligendi repellat placeat aliquam.
                                        </p>
                                        <div style={{}}>
                                            {/* <Button variant="info" style={{float:"right"}} >Ver Mas</Button> */}
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
