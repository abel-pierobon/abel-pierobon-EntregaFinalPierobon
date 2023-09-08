import React, { useState, useEffect } from 'react';

function ItemCount(props) {
    const stockDisponible = props.stock;
    const [stock, setStock] = useState(stockDisponible);
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

    const sumarClick = () => {
        if (stock > 0) {
            setCantidadSeleccionada(cantidadSeleccionada + 1);
            setStock((stockprevio) => stockprevio - 1);
        }
    };

    const restarClick = () => {
        if (cantidadSeleccionada > 0) {
            setCantidadSeleccionada(cantidadSeleccionada - 1);
            setStock((stockprevio) => stockprevio + 1);
        }
    };

    const agregar = () => {
        props.onAdd(cantidadSeleccionada, stock);
    };

    // Utiliza useEffect para asegurarte de que el valor de stock se actualice correctamente.
    useEffect(() => {
        setStock(stockDisponible);
    }, [stockDisponible]);

    return (
        <div className='flex flex-col items-start '>
            <p key={props.i} className='h-8'>  Stock Disponible: <b> {stock} </b></p>
            <div className='flex justify-content=start'>
                <button className="material-icons font-semibold border border-black rounded m-1" onClick={restarClick}>expand_more</button>
                <p className='border border-black rounded px-6 cantidad m-1'>{cantidadSeleccionada}</p>
                <button className="material-icons font-semibold border border-black rounded m-1" onClick={sumarClick}>expand_less</button>
            </div>
            {stock === 0 ? (
                <p className='flex justify-center text-red-500 font-bold'> Lo sentimos...No hay stock disponible de este producto</p>
            ) : (
                <button className='bg-green-500 hover:font-bold font-semibold border border-black rounded m-1 p-1' onClick={agregar}>Agregar al carrito</button>

            )}
        </div>
    )
}

export default ItemCount;
