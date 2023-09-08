import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink,Link } from 'react-router-dom';

function Cart() {
    // Accede al contexto del carrito
    const { cart, eliminarDelCarrito,vaciarCarrito } = useContext(CartContext);

    return (
        <div className='flex flex-col'>
            <h2 className='flex justify-center font-bold'>Carrito de compras:</h2>
            <div className='flex '>
                <section className='w-1/2'>
                    <ul className='flex-col justify-center'>
                        {cart.map((item) => (
                            <li key={item.id} className='flex justify-center border '>
                                <article className="grid sm:grid-cols-1 md:grid-cols-5 gap-2 border border-black card shadow-md p-4 rounded-md w-65"> 
                                    <div className='flex w-1/2'>
                                        <img className="w-20"src={`https://http2.mlstatic.com/D_604790-${item.thumbnail_id}-V.webp`}alt={item.thumbnail_id}/>
                                        <h3>{item.title.split(' ').slice(0, 3).join(' ')}</h3>
                                    </div>
                                    <div className='flex flex-col justify-items-start '>
                                        <p >Cantidad </p>
                                        <p>{item.quantity}</p>
                                    </div>
                                    <div className='flex flex-col '>
                                        <p >Precio unitario </p>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p >Subtotal: </p>
                                        <p>${item.price * item.quantity}</p>
                                    </div>
                                    <button onClick={() => eliminarDelCarrito(item.id)} className='material-icons'>
                                            delete
                                    </button>
                                    <NavLink to={`/prod/${item.id}`}className="bg-green-500 hover:font-bold font-semibold border border-black rounded m-1 p-1 flex justify-center">
                                        Ver producto
                                    </NavLink>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
                <button onClick={() => vaciarCarrito()} className='flex justify-center bg-red-500 hover:text-slate-100  font-semibold border border-black rounded m-1 p-1 h-10'>Vaciar todo el carrito</button>
                <Link to={"/"} className='flex justify-center bg-green-500 font-semibold hover:text-slate-100  border border-black rounded m-1 p-1 h-10'> Seguir Comprando</Link>
            </div>
        </div>
    );
}

export default Cart;

