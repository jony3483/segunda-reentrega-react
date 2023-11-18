import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"
import styles from '../styles.module.css'
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../firebase/client"
import { Button } from "antd"
import ItemDetail from "./itemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()

    const {id} = useParams()
    
    //firebase
    useEffect(() => {
        const productRef = doc(db, "products", id)
        getDoc(productRef)
        .then(snapshot => {
            if(snapshot.exists()){
                setProducto({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            }
        })
        .catch(e => console.error(e))
        },[id])

    return(
        < ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer
