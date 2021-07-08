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
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#75dace", display: "inline-block", marginRight: "1rem" }} />
                        <span>Limite de pago normal</span>
                    </Col>
                    <Col>
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#d7db92", display: "inline-block", marginRight: "1rem" }} />
                        <span>Pago tardio</span>
                    </Col>
                    <Col>
                        <div style={{ height: "1rem", width: "1rem", backgroundColor: "#0565ad", display: "inline-block", marginRight: "1rem" }} />
                        <span>Adelanto de pagos</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
