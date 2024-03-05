import React from 'react';
import { NavLink } from 'react-router-dom';

function Item({ articulo }) {
    return (
        <article
            key={articulo.id}
            className="grid sm:grid-cols-2 md:grid-cols-2 border border-black card shadow-md p-4 rounded-md bg-white " 
        >
            <div>
                <img
                    className="w-30 rounded"
                    src={`https://http2.mlstatic.com/D_604790-${articulo.thumbnail_id}-V.webp`}
                    alt={articulo.thumbnail_id}
                />
            </div>
            <div className=' h-auto'>
                <h2 className="font-black">Guitarra {articulo.marca}</h2>
                <h2 className="font-black">{articulo.sound}</h2>
                <p className="font-black">$ {articulo.price}</p>
                {articulo.available_quantity === 0 ? (
                    <p className='flex justify-center text-red-500 font-black'>SIN STOCK</p>
                ) : articulo.available_quantity === 1 ? (
                    <p className='flex justify-center text-red-500 font-black ultima-aparecer-desaparecer'>ÚLTIMA UNIDAD</p>
                ) : articulo.available_quantity > 1 && articulo.available_quantity < 3 ? (
                    <p className='flex justify-center text-red-500 font-bold'>ÚLTIMAS UNIDADES</p>
                ) : (
                    <p className="flex justify-center font-black text-green-500"> EN STOCK</p>
                )}
                <NavLink to={`/prod/${articulo.id}`} className="bg-sky-300 font-bold hover:font-black border border-black rounded m-1 p-1 flex justify-center ">
                    Ver producto
                </NavLink>
            </div>
        </article>
    );
}

export default Item;