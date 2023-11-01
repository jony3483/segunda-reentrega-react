import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"
import styles from '../styles.module.css'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()

    const {id} = useParams()
    

    useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> {
                setProducto(json)
                console.log(json)
            })
            .catch(error => console.error(error))
            
        },[id])

    return(
        <div className={styles.card}>
            <img src={producto?.image} />
            <h3>{producto?.title}</h3>
            <h5>sku: {producto?.id}</h5>
            <h4>USD {producto?.price}$</h4>
            <ItemCount />
            <p>{producto?.description}</p>
            <Link to={`/`}>Volver a la  Tienda</Link>
        </div>
    )
}

export default ItemDetailContainer
