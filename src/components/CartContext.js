import React, { useState, createContext } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;

function CartContextProvider(props) {
    const [cart, setCart] = useState([]);


    const agregarAlCarrito = (item, quantity, cantidadSeleccionada) => {
        // Verifica si el producto ya está en el carrito
        const estaEnCarrito = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (estaEnCarrito !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const agregar = [...cart];
            agregar[estaEnCarrito].quantity += quantity;
            setCart(agregar);

        } else {
            // Si el producto no está en el carrito, agrégalo
            const newItem = { ...item, quantity };
            setCart([...cart, newItem]);

        }
    };console.log(cart)

    const eliminarDelCarrito = (itemId) => {
        const eliminar = cart.filter((item) => item.id !== itemId);
        setCart(eliminar);
    }; 
    const vaciarCarrito = () =>{
        setCart([]);
    }


    return (
        <Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito,vaciarCarrito }}>
            {props.children}
        </Provider>
    );
}

export { CartContext, CartContextProvider };
