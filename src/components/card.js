import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../../src/styles.module.css"

const Carta = (props) => (
<Card className={styles.carta}>
    <Card.Header id={styles.carta}>
    {props.title}
    </Card.Header>
    <Card.Img variant="top" id={styles.imagen} src={props.imagen}/>
    <Card.Body>
        <Card.Text>
        {props.body}
        </Card.Text>
    </Card.Body>
</Card>
)
export default Carta;
