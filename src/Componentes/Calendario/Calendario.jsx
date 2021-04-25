import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Mes from './Mes'
import Dia from './Dia'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InformacionCalendario from './InformacionCalendario'

export default function Calendario() {
    const vecColores = ['#5d29bf', '#e77cdb', '#0565ad', '#173c51', '#603912', '#75dace', '#ab079d', '#62c33d', '#9f0f56', '#1a39e9', '#531911', '#87c4d7', '#d0c20e', '#772f92', '#304fd7', '#4db650', '#186468', '#1d27b4', '#63aee0', '#b7622f', '#46e6df', '#ef34f4', '#435b15', '#da8570', '#d7db92', '#1597d0', '#085ef5', '#e3aac7', '#56d2cf', '#8070a4', '#56d2cf', '#8070a4']
    const cantidadDias = 30;

    var dias31mes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "  ", "  ", "  ", "  "];

    var dias30mes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "  ", "  ", "  ", "  ", "  "];

    var dias29mes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];

    var dias28mes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];



    return (
        <>
            <>
                <div id="link3" />
                <Container>
                    <Row>
                        <Col>
                            <Mes nombreMes="Abril" cantidadDias={dias30mes} vecColores={vecColores} />

                        </Col>
                        <Col>
                            <Mes nombreMes="Mayo" cantidadDias={dias31mes} vecColores={vecColores} />

                        </Col>
                        <Col>
                            <Mes nombreMes="Junio" cantidadDias={dias30mes} vecColores={vecColores} />
                        </Col>
                    </Row>
                </Container>
                <br />
                <InformacionCalendario />
            </>
        </>
    )
}
