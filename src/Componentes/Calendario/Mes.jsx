import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbo from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dia from './Dia'

export default function Mes(props) {
    const { nombreMes, cantidadDias, vecColores } = props
    // * Inicializar un array vacio y poder llenarlo con valores nulos para poder efectuar un map, de lo contrario no se puede
    // $ var dias = new Array(cantidadDias);
    // $ dias.fill(null)
    var i = 1;
    // dias.push( <Dia numeroDia={i++} colorFondo={vecColores[i]} />)



    return (
        <>
            <div>
                <h1 style={{textAlign:"center"}}>{nombreMes}</h1>
                <Container>
                    <Row xs="7" sm="7" md="7" lg="7" xl="7">
                        {cantidadDias.map(dia => {
                            return <Dia numeroDia={dia} colorFondo={vecColores[i++]} />
                        })}
                        
                    </Row>
                </Container>
            </div>
        </>

    )
}
