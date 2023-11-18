
import { Link } from "react-router-dom"
import styles from '../styles.module.css'
import { Button } from "antd"
import { useContext } from "react"
import { CartContext } from "../cartContex/cartContext"

const Item = ({producto}) => {
    const {numero} = useContext(CartContext)

    return(
        <div div className={styles.item} >
            <img src={producto.image} />
            <h4>{producto.title}</h4>
            <p>$ {producto.price}</p>
            <Button>
            <Link to={`/item/${producto.id}`}>Ver Mas</Link>
            </Button>

        </div>
    
    )
}

export default Item