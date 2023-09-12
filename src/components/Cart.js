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
                    <h2 className='flex justify-center font-black text-2xl'> No hay productos en el carrito..</h2>
                    <Link to={"/"} className='flex justify-center bg-green-500 font-semibold hover:text-slate-100 border border-black rounded m-1 p-1 h-10'> Mira el Cátalogo</Link>
                </>
                ) : (
            <div className='grid'>
                <section className="w-3/3 grid sm:grid-cols-1 md:grid-cols-1 p-4 rounded-md">
                    {cart.map((item) => (
                    <section className='grid w-99 sm:grid-cols-1 md:grid-cols-5 border border-black m-2 rounded p-4' key={item.id}>
                        <div className='className="h-12 text-start '>
                            <p className='font-bold flex justify-center'>PRODUCTO</p>
                            <p className='font-bold flex justify-center'>{item.marca} {item.sound}</p>
                        </div>
                        <div >
                            <p className='font-bold flex justify-center'>PRECIO</p>
                            <p className='flex justify-center' >$ {item.price}</p>
                        </div>
                        <div >
                            <p className='font-bold flex justify-center'>CANTIDAD</p>
                            <div className='flex justify-center '>
                                <p className='flex justify-center mx-4 border border-black rounded px-4 cantidad m-1'>{item.quantity}</p>
                                <NavLink to={`/prod/${item.id}`} className=" bg-green-500 hover:text-slate-100 border border-black font-semibold rounded px-4 h-6 m-1">Añadir</NavLink>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold flex justify-center'>SUB TOTAL</p>
                            <p className='flex justify-center'>${item.price * item.quantity}</p>
                        </div>
                        <button onClick={() => {
                            eliminarDelCarrito(item.id);
                            volverStock(item.quantity, item.id);
                            }} className='material-icons text-red-700'>
                            delete
                        </button>
                    </section>
                    ))}
                </section>
                <h2 className='flex justify-center font-black text-2xl'>Total a pagar: ${total}</h2>
                <div className=' w-2/2 flex justify-center m-8'>
                <Link to={"/"} className='flex justify-center bg-green-500 font-semibold hover:text-slate-100 border border-black rounded m-1 p-1 h-10'> Seguir Comprando</Link>
                    <button onClick={() => {
                        vaciarCarrito();
                        cart.forEach((item) => {
                            volverStock(item.quantity, item.id);
                        });
                        }} className='flex justify-center bg-red-500 hover:text-slate-100 font-semibold border border-black rounded m-1 p-1 h-10'>
                        Vaciar todo el carrito
                    </button>
                </div>
            </div>
                )}
        </div>
    );
    
}

export default Cart;
