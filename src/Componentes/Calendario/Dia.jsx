import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default function Dia(props) {
    const { numeroDia, colorFondo } = props
    return (
        <>
            <Col>
                <span style={{ backgroundColor: colorFondo }}>{numeroDia}</span>
            </Col>
        </>
    )
}
