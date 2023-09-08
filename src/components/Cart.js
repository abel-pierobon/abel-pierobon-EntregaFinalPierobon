import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    // Accede al contexto del carrito
    const { cart, eliminarDelCarrito,vaciarCarrito } = useContext(CartContext);

    return (

        <section className='flex'>
            <h2 className='flex justify-center font-bold'>Carrito de compras:</h2>
        <div>
            
            <ul className='flex-col justify-center'>
                {cart.map((item) => (
                    <li key={item.id} className='flex justify-center border '>
                        <article className="grid sm:grid-cols-1 md:grid-cols-5 gap-2 border border-black card shadow-md p-4 rounded-md w-65"> 
                            <div className='flex'>
                                <img className="w-20"src={`https://http2.mlstatic.com/D_604790-${item.thumbnail_id}-V.webp`}alt={item.thumbnail_id}/>
                                <h3>{item.title}</h3>
                            </div>
                            <div className='flex flex-col justify-items-start w-40'>
                                <p >Cantidad </p>
                                <p>{item.quantity}</p>
                            </div>
                            <div className='flex flex-col w-40'>
                                <p >Precio unitario </p>
                                <p>${item.price}</p>
                            </div>
                            <div className='flex flex-col w-40'>
                                <p >Subtotal: </p>
                                <p>${item.price * item.quantity}</p>
                            </div>
                            <button onClick={() => eliminarDelCarrito(item.id)} className='material-icons'>
                                    delete
                            </button>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
        <button onClick={() => vaciarCarrito()} className=''>Vaciar todo el carrito</button>
        </section>
    );
}

export default Cart;

