
import { Link } from "react-router-dom"
import styles from '../styles.module.css'

const Item = ({producto}) => {
    return(
        <div div className={styles.item} >
            <img src={producto.image} />
            <h4>{producto.title}</h4>
            <p>USD {producto.price}$</p>
            <Link to={`/item/${producto.id}`}>Ver Mas</Link>

        </div>
    
    )
}

export default Item