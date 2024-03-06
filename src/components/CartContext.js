import React, { useState, useEffect,createContext } from 'react';
import { doc, updateDoc,increment,getDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { toast } from 'sonner';

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

        } else {
            const nuevoItem = { ...item, quantity };
            setCart([...cart, nuevoItem]);
        }
    };

    const eliminarDelCarrito = (itemId)=> {
        const eliminar = cart.filter((item) => item.id !== itemId);
        setCart(eliminar);
        toast.success("producto eliminado del carrito")
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
    const sumarCart = async (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);
    
        if (itemIndex !== -1) {
            const item = cart[itemIndex];
            const stockRef = doc(db, 'productos', itemId);
            const stockDoc = await getDoc(stockRef);
    
            if (stockDoc.exists()) {
                const stockDisponible = stockDoc.data().available_quantity;
    
                if (item.quantity + 1 <= stockDisponible) {
                    const nuevoCarrito = [...cart];
                    nuevoCarrito[itemIndex].quantity += 1;
                    setCart(nuevoCarrito);
                    await updateDoc(stockRef, {
                        available_quantity: increment(-1)
                    });
                }
            }
        }
    };
    const restarCart = async (itemId) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        const stockRef = doc(db, 'productos', itemId);

        if (item.quantity > 1) {
            const nuevoCarrito = [...cart];
            nuevoCarrito[itemIndex].quantity -= 1;
            setCart(nuevoCarrito);
            await updateDoc(stockRef, {
                available_quantity: increment(1)
            });
        } else {
            const nuevoCarrito = cart.filter((cartItem) => cartItem.id !== itemId);
            setCart(nuevoCarrito);
            await updateDoc(stockRef, {
                available_quantity: increment(1)
            });
        }
    }
};
    const vaciarCarrito = () =>{
        setCart([]);
        toast.success("Carrito eliminado")
    }
    const [usuario,setUsuario]=useState('')

    const updateUsuario = (user) => {
        setUsuario(user);
        console.log(usuario)
    };
    useEffect(() => {
        // Verifica la existencia de la información del usuario en el localStorage al cargar la aplicación
        const userId = localStorage.getItem('userId');
        const userDisplayName = localStorage.getItem('userDisplayName');
        const userEmail = localStorage.getItem('userEmail');
    
        if (userId && userDisplayName && userEmail) {
          // Si hay información del usuario, actualiza el estado del usuario en el contexto
        updateUsuario({ uid: userId, displayName: userDisplayName, email: userEmail });
        }
    }, []);
    return (
        <Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito,vaciarCarrito, volverStock,sumarCart,restarCart,updateUsuario,usuario }}>
            {props.children}
        </Provider>
    );
}

export { CartContext, CartContextProvider };
