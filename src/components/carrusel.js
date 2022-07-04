import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from "../../src/img/principal.jpeg"
import Container from 'react-bootstrap/Container';
import styles from "../../src/styles.module.css"

const Foto = () => (
<Container >
<Carousel className={styles.componentes}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Principal}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Principal}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Principal}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Container>
)
export default Foto;