import { Route, Routes } from "react-router-dom";
import React, { useContext } from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from "./Cart";
import Login from "./Login";
import Admin from "./Admin";
import { CartContext } from "./CartContext";

function Main() {
    const { usuario } = useContext(CartContext);
    // Función para verificar la autenticación del usuario
    const verificarAutenticacion = (componente) => {
        if (usuario) {
        return componente;
        } else {
        // Si no hay usuario autenticado, redirigir a la página de inicio de sesión
        return <Login />;
        }
    };
    return (
        <main className='p-2 grow'>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda Online"/>} />
                <Route path="/cat/:id" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda Online"/>} />
                <Route path="/cart"element={<Cart/>}/>
                <Route path="/login"element={<Login />}/>
                <Route path="/admin"element={verificarAutenticacion(<Admin />)}/>
                <Route path="/prod/:id" element={<ItemDetailContainer/>} />
                <Route path="/ord/:id" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda Online"/>} />
            </Routes>
        </main>
    )
}

export default Main;