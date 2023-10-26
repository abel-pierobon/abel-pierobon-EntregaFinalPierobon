import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { NavLink, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection,addDoc,serverTimestamp } from 'firebase/firestore';
import Brief from './Brief';

function Cart() {
    const { cart, eliminarDelCarrito, vaciarCarrito, volverStock,sumarCart,restarCart } = useContext(CartContext);
    const [token,setToken] = useState("")
    const [clase,setClase] = useState("ocultar")
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        dirección: '',
    });

    const total = cart.reduce((acumulador, item) => {
        return acumulador + item.price * item.quantity;
    }, 0); 
    const laVenta =  () => {
        const total = cart.reduce((acumulador, item) => {
            return acumulador + item.price * item.quantity;
        }, 0); 
        
        const ventasCollection = collection(db, 'ventas');
        const venta = {
            cliente: {
                nombre: formData.nombre,
                apellido: formData.apellido,
                dni: formData.dni,
                email: formData.email,
                dirección: formData.dirección,
            },
            fecha: serverTimestamp(),
            productos: cart.map((item) => ({
                id: item.id,
                marca:item.marca,
                sonido:item.sound,
                cantidad: item.quantity,
                price: item.price,
            })),
            total: total,
        };
            const pedido = addDoc(ventasCollection, venta);
            pedido
            .then((resultado) => {
                setToken(resultado.id)
            })
            .catch((error) => {
            })
    };
    const cambiarClase = () => {
        const nuevaClase = clase === 'ocultar' ? 'detalle' : 'ocultar';
        setClase(nuevaClase);
    };

    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };
    return (
        <div className='gap-2'> 
            {cart.length === 0 ? (
                <div className='flex flex-col'>
                    <h2 className='flex justify-center font-black text-2xl h-16 mt-4 texto-aparecer-desaparecer'> No hay productos en el carrito..</h2>
                    <div className='flex justify-center'>
                        <Link to={"/"} className='flex justify-center bg-green-500 font-black hover:text-slate-100 border border-black rounded m-1 p-1 h-10'> Mira el Catálogo de productos</Link>
                    </div>
                </div>
                ) : (
                <div className='carrito'>
                    <section className="rounded-md ">
                            {cart.map((item) => (
                            <section className='grid  sm:grid-cols-1 md:grid-cols-2 border border-black rounded m-4 mt-2rem p-4' key={item.id}>
                                <div className='text-start '>
                                    <p className='font-black flex justify-center'>PRODUCTO</p>
                                    <p className='font-black flex justify-center'>{item.marca} {item.sound}</p>
                                </div>
                                <div >
                                    <p className='font-black flex justify-center'>PRECIO</p>
                                    <p className='flex justify-center font-black ' >$ {item.price}</p>
                                </div>
                                <div >
                                    <p className='font-black  flex justify-center'>CANTIDAD</p>
                                    <div className='flex justify-center font-black  '>
                                        <button className="material-icons font-black border border-black rounded m-1" onClick={() => restarCart(item.id)}>expand_more</button>
                                        <p className='flex justify-center mx-4 border border-black rounded px-4 cantidad m-1'>{item.quantity}</p>
                                        <button className="material-icons font-black border border-black rounded m-1" onClick={() => sumarCart(item.id)}>expand_less</button>                   
                                    </div>
                                </div>
                                <div>
                                    <p className='font-black  flex justify-center'>SUB TOTAL</p>
                                    <p className='flex justify-center font-black '>$ {item.price * item.quantity}</p>
                                </div>
                                <div>
                                    <div className='flex justify-center'>
                                    <NavLink to={`/prod/${item.id}`} className=" bg-green-500 hover:text-slate-100 border border-black font-bold rounded p-1 h-auto m-1">Detalle producto</NavLink>
                                        <div className='flex justify-center font-black '>
                                            <button onClick={() => {
                                                eliminarDelCarrito(item.id);
                                                volverStock(item.quantity, item.id);
                                                }} className='material-icons text-red-700 '>
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            ))}
                            <h2 className='flex justify-center font-black text-red-700 text-2xl'>Total a pagar: ${total}</h2>
                            <div className=' w-2/2 flex justify-center '>
                                <Link to={"/"} className='flex justify-center bg-green-500 font-black hover:text-slate-100 border border-black rounded m-1 p-1 '> Seguir Comprando</Link>
                                <button onClick={() => {
                                    vaciarCarrito();
                                    cart.forEach((item) => {
                                        volverStock(item.quantity, item.id);
                                    });
                                    }} className='flex justify-center bg-red-500 hover:text-slate-100 font-black border border-black rounded m-1 p-1'>
                                    Vaciar todo el carrito
                                </button>
                            </div>
                    </section>
                        <section className='border border-black rounded p-5'>
                        <div className=' w-3/3 '>
                        <h2 className='flex justify-center text-2xl font-black  '>Completa el formulario para finalizar la compra</h2>
                        <form className="max-w-md mx-auto my-8font-black  ">
                            <div className="mb-4">
                                <label className="block text-black-900 text-sm font-black mb-2">
                                Nombre
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Ingresa tu nombre"
                                name="nombre" 
                                value={formData.nombre}  
                                onChange={handleInputChange}  
                                required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-black-900 text-sm font-black  mb-2">
                                Apellido
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Ingresa tu apellido"
                                name="apellido" 
                                value={formData.apellido}  
                                onChange={handleInputChange} 
                                required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-black-900 text-sm font-black  mb-2">
                                DNI
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Ingresa tu DNI"
                                name="dni" 
                                value={formData.dni}  
                                onChange={handleInputChange} 
                                required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black-900 text-sm font-black  mb-2">
                                Correo Electrónico
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                name="email" 
                                value={formData.email}  
                                onChange={handleInputChange} 
                                required
                                />
                                <p className="text-gray-600 text-xs italic">Nunca compartiremos tu correo electrónico con nadie más.</p>
                            </div>

                            <div className="mb-4">
                                <label className="block text-black-900 text-sm font-black  mb-2">
                                Dirección
                                </label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Ingresa tu dirección"
                                name="dirección" 
                                value={formData.dirección}  
                                onChange={handleInputChange} 
                                required
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <Link onClick={() => { laVenta(); vaciarCarrito(); cambiarClase() }} 
                                    className="bg-green-600 hover:bg-green-400 text-black font-black border border-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Realizar Pedido
                                </Link>
                            </div>
                        </form>                     
                    </div>
                        </section>
                </div>
            )}
            <div className={clase}>
                <Brief token={token}/>
            </div>
        </div>
    );   
}

export default Cart;