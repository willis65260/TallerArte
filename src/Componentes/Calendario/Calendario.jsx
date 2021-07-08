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
// #d0c20e
export default function Calendario() {
    const vecColores = ['', '#75dace', '#d7db92', '#d7db92', '#d7db92', '#d7db92', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '#0565ad', '#0565ad', '#0565ad', '#0565ad', '#0565ad']
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
                    <Row xs="1" sm="2" md="2" lg="3" xl="3">
                        <Col>
                            <Mes nombreMes="Julio" cantidadDias={dias31mes} vecColores={vecColores} />

                        </Col>
                        <Col>
                            <Mes nombreMes="Agosto" cantidadDias={dias31mes} vecColores={vecColores} />

                        </Col>
                        <Col>
                            <Mes nombreMes="Septiembre" cantidadDias={dias30mes} vecColores={vecColores} />
                        </Col>
                    </Row>
                </Container>
                <br />
                <InformacionCalendario />
            </>
        </>
    )
}
