import React from 'react';
import { NavLink } from 'react-router-dom';

function Item({ articulo }) {
    return (
        <article
            key={articulo.id}
            className="grid sm:grid-cols-1 md:grid-cols-1 border border-black card shadow-md p-4 rounded-md"
        >
            <img
                className="w-30"
                src={`https://http2.mlstatic.com/D_604790-${articulo.thumbnail_id}-V.webp`}
                alt={articulo.thumbnail_id}
            />
            <div>
                <h2 className="h-12 text-start font-bold uppercase">
                    {articulo.title.split(' ').slice(0, 4).join(' ')}
                </h2>
                <h2 className="font-font-semibold">Marca: {articulo.marca}</h2>
                <h2 className="font-font-semibold">Estilo: {articulo.sound}</h2>
                <p className="font-font-semibold"> Precio: <b>${articulo.price}</b></p>
                {articulo.available_quantity > 0 ? (
                <p className=" flex justify-center font-bold font-mono ">PRODUCTO EN STOCK</p>
            ) : (
                <p className='flex justify-center text-red-500 font-bold'> SIN STOCK</p>
            )}
                <NavLink to={`/prod/${articulo.id}`}className="bg-green-500 hover:font-bold font-semibold border border-black rounded m-1 p-1 flex justify-center">
                    Ver producto
                </NavLink>
            </div>
        </article>
    );
}

export default Item;
