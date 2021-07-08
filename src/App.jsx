import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Header from './Componentes/Header';
// import './Recursos/Bootstrap/css/bootstrapD.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Infoinicio from './Componentes/Info-inicio';
import './Recusos/estilos.css'
import Actividades from './Componentes/Actividades';
import Cursos from './Componentes/Cursos';
import Calendario from './Componentes/Calendario/Calendario';
import InscrCalendario from './Componentes/Inscr-Calendario';
import Instalaciones from './Componentes/Instalaciones';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';


const handleScroll = e => {
  e.preventDefault();
  const main = this.main.current;
  window.scrollTo({
    top: main.offsetTop,
    left: 0,
    behavior: "instant"
  });
};

function App() {
  return (
    <div className="App">
      <div className="imagen-fondo" />
      <div className="fondo-blaquesino" />
      <div className="">
        <Header />
        <Infoinicio />
      </div>

      <div className="">
        <div id="link1" />
        <Actividades />
        {/* <div id="link2" />
        <Cursos /> */}
        <div id="link6" />
        <InscrCalendario />
        <div id="link4" />
        <Instalaciones />
        <div id="link5" />
        <Contacto />
        <Footer />
      </div>

    </div>
  );
}

export default App;
