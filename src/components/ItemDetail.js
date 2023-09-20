import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./CartContext.js";

function ItemDetail({ producto }) {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad,setCantidad]= useState(0)

    const onAdd = (cantidadSeleccionada) => {
        agregarAlCarrito(producto, cantidadSeleccionada);
        setCantidad(cantidadSeleccionada)
    };
    return (
        <>
        <article className="grid sm:grid-cols-1 md:grid-cols-3 border border-black card shadow-md p-2 w-2/2">
            <div className='flex justify-center'>
                <img className='w-64 object-fill' src={`https://http2.mlstatic.com/D_604790-${producto.thumbnail_id}-V.webp`} alt={producto.thumbnail_id} />
            </div>
            <div className=' mx-8'>
                <h2 className="text-start font-bold">{producto.title}</h2>
                <h2>Marca: {producto.marca}</h2>
                <p className='h-16'>Cantidad vendidos:  {producto.sold_quantity}</p>
            </div>
            <div>
                <p className='font-semibold'>Formas de pago</p>
                <p >Precio <b>${producto.price}</b></p>
                <ItemCount stock={producto.available_quantity} cantidad={cantidad} onAdd={onAdd} id={producto.id} />
                {cantidad === 0 ? (
                <p className='hidden'></p>
            ) : (
                <NavLink to={"/cart"} className='bg-green-500 hover:font-bold font-semibold border border-black rounded m-4 p-1' > Ver Carrito </NavLink>
            )}
            </div>
            <Link to={"/"} className='flex justify-center bg-green-500 hover:font-bold font-semibold border border-black rounded mt-6 m-1 p-1'> Volver al Catalogo</Link>
        </article>
        </>
    );
}

export default ItemDetail;
