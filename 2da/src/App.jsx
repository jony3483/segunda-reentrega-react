import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/navBar/navBar'
import ItemListContainer from './Componentes/itemListContainer/itemListContainer'
import ItemDetailContainer from './Componentes/itemDetailContainer/itemDetailContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CartComponentContext from './Componentes/cartContex/cartContext'

function App() {

  return (
    <CartComponentContext>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
    </BrowserRouter>
    </CartComponentContext>
  )
}

export default App
