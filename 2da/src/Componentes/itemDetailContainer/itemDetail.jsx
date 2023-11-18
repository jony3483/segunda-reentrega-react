import { useParams } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"
import { Button } from "antd"
import { Link } from "react-router-dom"
import styles from '../styles.module.css'

const ItemDetail = ({producto}) => {
    const {id} = useParams()
    return(
        <div className={styles.card}>
        <img src={producto?.image} />
        <h3>{producto?.title}</h3>
        <p>{producto?.description}</p>
        <h4>$ {producto?.price}</h4>
        <ItemCount />
            <Button>
                <Link to={`/`}>seguir comprando</Link>
            </Button>
        
    </div>
    )
}
export default ItemDetail