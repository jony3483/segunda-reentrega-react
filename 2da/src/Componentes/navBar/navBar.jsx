import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CartWidget from '../cartWidget/cartWidget';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../styles.module.css'


const NavBar = () => {

    const arrayDeCategorias = [           
        "Alimento",
        "Ropa",
        "Camas"
    ]

    return (
        <>
        <div className={styles.container}>
            <NavLink to={'/'}>TIENDA</NavLink>
            {arrayDeCategorias.map((cat, index) => 
            <NavLink to={`/category/${cat}`} key={index}>{cat}</NavLink>)}
            < CartWidget />
        </div>
        </>
    )
}
export default NavBar
