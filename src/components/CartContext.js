import React, { useState, createContext } from 'react';
import { doc, updateDoc,increment } from 'firebase/firestore';
import { db } from "../firebase";

const CartContext = createContext();
const { Provider } = CartContext;

function CartContextProvider(props) {
    const [cart, setCart] = useState([]);
    const agregarAlCarrito = (item, quantity) => {
        const estaEnCarrito = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (estaEnCarrito !== -1) {
            const agregar = [...cart];
            agregar[estaEnCarrito].quantity += quantity;
            setCart(agregar);
            console.log(cart)
        } else {
            const nuevoItem = { ...item, quantity };
            setCart([...cart, nuevoItem]);

        }
    };console.log(cart)

    const eliminarDelCarrito = (itemId)=> {
        const eliminar = cart.filter((item) => item.id !== itemId);
        setCart(eliminar);
    }
    const volverStock = async (cantidadSeleccionada, productoId) => {
        try {
            const stockRef = doc(db, 'productos', productoId);
            await updateDoc(stockRef, {
                available_quantity: increment(cantidadSeleccionada)
            });
        } catch (error) {
        }
    };
    const vaciarCarrito = () =>{
        setCart([]);
    }


    return (
        <Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito,vaciarCarrito, volverStock }}>
            {props.children}
        </Provider>
    );
}

export { CartContext, CartContextProvider };
