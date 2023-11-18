import { useEffect, useState } from "react"
import Item from "../item/item"
import { Spin } from 'antd'
import { useParams } from "react-router-dom"
import styles from '../styles.module.css'
import { collection, doc, getDoc, getDocs, query, where} from "firebase/firestore"
import { db } from "../../firebase/client"


const ItemListContainer =() => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const productsRef = collection(db, "products")
    
        getDocs(productsRef)
        .then(snapshot => {
            setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
        .catch(e => console.error(e))
    },[])
    return(
        <div className={styles.containerlist}>
        {products.length > 0 ? (
            <>
                {products.map((prod, index) => <Item key={index} producto={prod} /> )}
            </>
        ) : (
            <Spin />
        )}
        </div>
    )
}

export default ItemListContainer