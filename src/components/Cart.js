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
                <div className='flex flex-col'>
                    <h2 className='flex justify-center font-black text-2xl texto-aparecer-desaparecer'> No hay productos en el carrito..</h2>
                    <div className='flex justify-center'>
                        <Link to={"/"} className='flex justify-center bg-green-500 font-semibold hover:text-slate-100 border border-black rounded m-1 p-1 h-10'> Mira el Cátalogo</Link>
                    </div>
                </div>
                ) : (
                    <div className='flex justify-content'>
                    <section className="rounded-md">
                            <h2 className='flex justify-center font-black text-2xl'>Total a pagar: ${total}</h2>
                            {cart.map((item) => (
                            <section className='grid h-24 sm:grid-cols-1 md:grid-cols-5 border border-black rounded m-4 mt-2rem p-4' key={item.id}>
                                <div className='text-start '>
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
                                    <p className='flex justify-center'>$ {item.price * item.quantity}</p>
                                </div>
                                <div>
                                    <p className='font-bold flex justify-center'>Eliminar del carrito</p>
                                    <button onClick={() => {
                                        eliminarDelCarrito(item.id);
                                        volverStock(item.quantity, item.id);
                                        }} className='material-icons text-red-700 '>
                                        delete
                                    </button>
                                </div>
                                
                            </section>
                            ))}
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
                        </section>
                        <section>
                            <h2 className='flex justify-center text-2xl'>Completa el formulario para finalizar la compra</h2>
                        <div className='border border-black rounded w-3/3 bg-green-100'>
                        <form className="max-w-md mx-auto my-8 ">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                Nombre
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Ingresa tu nombre"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                Apellido
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="apellido"
                                type="text"
                                placeholder="Ingresa tu apellido"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
                                DNI
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dni"
                                type="number"
                                placeholder="Ingresa tu DNI"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                />
                                <p className="text-gray-600 text-xs italic">Nunca compartiremos tu correo electrónico con nadie más.</p>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
                                Dirección
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="direccion"
                                type="text"
                                placeholder="Ingresa tu dirección"
                                />
                            </div>

                            <div className="mb-4">
                                <button
                                className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                >
                                FINALIZAR COMPRA
                                </button>
                            </div>
                        </form>
                        
                    </div>
                    </section>
                </div>
            )}
        </div>
    );
    
}

export default Cart;
