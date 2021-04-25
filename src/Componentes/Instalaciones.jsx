import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'


import img1 from '../Recusos/Imagenes/bellas-artes-1.jpg'
import img2 from '../Recusos/Imagenes/bellas-artes-2.jpg'
import img3 from '../Recusos/Imagenes/bellas-artes-3.jpg'

export default function Instalaciones() {
    return (
        <>
            <Jumbotron className="fondo-transparente" >
                <h1 style={{ textAlign: "center" }}>Instalaciones</h1>
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron className="fondo-transparente">
                                <h1 style={{ textAlign: "center" }}>Ubicacion</h1>
                                <br />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2700079038054!2d-71.98270078517216!3d-13.519014490498439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd6743e1dc0df%3A0x8f62de2f4dbd4d1!2sUniversidad%20Nacional%20Diego%20Quispe%20Tito!5e0!3m2!1ses-419!2smx!4v1619162457373!5m2!1ses-419!2smx" width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" title="map" />
                            </Jumbotron>

                        </Col>
                        <Col>

                            <Jumbotron className="fondo-transparente" style={{ height: "562px" }}>
                                <h1 style={{ textAlign: "center" }}>Imágenes</h1>
                                <br />
                                <Carousel>
                                    <Carousel.Item>
                                        <Image src={img1} />
                                        <Carousel.Caption>
                                            {/* <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={img2} />

                                        <Carousel.Caption>
                                            {/* <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <Image src={img3} />
                                        <Carousel.Caption>
                                            {/* <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <Button style={{ float: "right" }}><span style={{ margin: "auto 1rem" }}>Ver mas</span></Button>
            </Jumbotron>
        </>
    )
}
