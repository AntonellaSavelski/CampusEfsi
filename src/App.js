import Header from './components/header.js'
import Carrusel from './components/carrusel.js'
import Carta from './components/card.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Footer from './components/footer.js';
import Inscripcion from "../src/img/inscipcion.jpeg"

function App() {
  return (

  <div>
    <center>
      <Header />
      <Container>
          <Carrusel />
            <div className="row col-12">
              <div className="col-md-3">
                <Carta
                title="Inscripción ciclo lectivo 2021 - Nivel Secundario" 
                body="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
                imagen={Inscripcion}
                />
                </div>
              <div className="col-md-6">
                <Carta 
                title="Inscripción ciclo lectivo 2021 - Nivel Secundario" 
                body="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
                imagen={Inscripcion}
                />
              </div>
              <div className="col-md-3">
                <Carta 
                title="Inscripción ciclo lectivo 2021 - Nivel Secundario" 
                body="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
                imagen={Inscripcion}
                />
              </div>
            </div>
            <div className="row col-12">

              <div className="col-md-3">
                <Carta 
                 title="Inscripción ciclo lectivo 2021 - Nivel Secundario" 
                 body="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
                 imagen={Inscripcion}
                />
              </div>
              <div className="col-md-6">
                <Carta 
                 title="Inscripción ciclo lectivo 2021 - Nivel Secundario" 
                 body="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
                 imagen={Inscripcion}
                />
              </div>
              <div className="col-md-3">
                <Carta 
                 title="Inscripción ciclo lectivo 2021 - Nivel Secundario" 
                 body="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
                 imagen={Inscripcion}
                />
              </div>

            </div>
      </Container>
      <Footer />
    </center>
</div>

)}
export default App;
