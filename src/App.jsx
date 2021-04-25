
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
        <Actividades />
        <Cursos />
        <InscrCalendario />
        <Instalaciones />
        <Contacto />
        <Footer />
      </div>

    </div>
  );
}

export default App;
