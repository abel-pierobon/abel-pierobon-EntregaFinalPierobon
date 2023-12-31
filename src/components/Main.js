import { Route, Routes } from "react-router-dom";
import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from "./Cart";


function Main() {
    return (
        <main className='p-2 grow mx-10 bg-slate-200'>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda Online"/>} />
                <Route path="/cat/:id" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda Online"/>} />
                <Route path="/cart"element={<Cart/>}/>
                <Route path="/prod/:id" element={<ItemDetailContainer/>} />
                <Route path="/ord/:id" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda Online"/>} />
            </Routes>
        </main>
    )
}

export default Main;