import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


export default function InformacionCalendario() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#5d29bf", display: "inline-block", marginRight: "1rem" }} />
                        <span>Sin actividades</span>
                    </Col>
                    <Col>
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#e77cdb", display: "inline-block", marginRight: "1rem" }} />
                        <span>Pintura</span>
                    </Col>
                    <Col>
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#0565ad", display: "inline-block", marginRight: "1rem" }} />
                        <span>Acuarela</span>
                    </Col>
                    <Col>
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#173c51", display: "inline-block", marginRight: "1rem" }} />
                        <span>Dibujo</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
