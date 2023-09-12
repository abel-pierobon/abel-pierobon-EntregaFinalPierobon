import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink, Link } from 'react-router-dom';

function Cart() {
    const { cart, eliminarDelCarrito, vaciarCarrito, volverStock } = useContext(CartContext);
    const total = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
    }, 0);
    return (
    <div> 
        {cart.length === 0 ? (
            <>
                <h2 className='flex justify-center'> carrito vacio</h2>
                <Link to={"/"} className='flex justify-center bg-green-500 font-semibold hover:text-slate-100 border border-black rounded m-1 p-1 h-10'> Mira el Cátalogo</Link>
            </>
            ) : (
        <div className='grid'>
            <section className="w-2/3 grid sm:grid-cols-1 md:grid-cols-1 p-4 rounded-md">
                {cart.map((item) => (
                <section className='grid w-99 sm:grid-cols-1 md:grid-cols-6 border border-black m-2 rounded p-4' key={item.id}>
                    <div className='className="h-12 text-start '>
                        <p className='font-bold w-1/2'>PRODUCTO</p>
                        <p>{item.marca} {item.sound}</p>
                    </div>
                    <div>
                        <p className='font-bold'>PRECIO</p>
                        <p>$ {item.price}</p>
                    </div>
                    <div>
                        <p className='font-bold'>CANTIDAD</p>
                        <p>{item.quantity}</p>
                    </div>
                    <div>
                        <p className='font-bold'>SUB TOTAL</p>
                        <p>${item.price * item.quantity}</p>
                    </div>
                    <NavLink to={`/prod/${item.id}`} className="bg-green-400 hover:font-bold font-semibold border border-black rounded m-1 p-1 flex justify-center">
                        Ver producto
                    </NavLink>
                    <button onClick={() => {
                        eliminarDelCarrito(item.id);
                        volverStock(item.quantity, item.id);
                        }} className='material-icons text-red-700'>
                        delete
                    </button>
                </section>
                ))}
            </section>
            <div className=' w-2/2 flex justify-center m-8'>
                <button onClick={() => {
                    vaciarCarrito();
                    cart.forEach((item) => {
                        volverStock(item.quantity, item.id);
                    });
                    }} className='flex justify-center bg-red-500 hover:text-slate-100 font-semibold border border-black rounded m-1 p-1 h-10'>
                    Vaciar todo el carrito
                </button>
                <Link to={"/"} className='flex justify-center bg-green-500 font-semibold hover:text-slate-100 border border-black rounded m-1 p-1 h-10'> Seguir Comprando</Link>
                <h2>Total a pagar: {total}</h2>
            </div>
        </div>
            )}
        
        </div>
    );
    
}

export default Cart;
