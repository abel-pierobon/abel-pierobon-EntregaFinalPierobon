import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase";
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

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
    
    const agregar = async () => {
        props.onAdd(cantidadSeleccionada, stock);
        const productoId = props.id; 
        const stockRef = doc(db, 'productos', productoId);
        toast.success("producto agregado al carrito")
        await updateDoc(stockRef, {
            available_quantity: stock
        });
        setCantidadSeleccionada(0)
    };

    useEffect(() => {
        setStock(stockDisponible);
    }, [stockDisponible]);

    return (
        <div className='flex flex-col items-start '>
            <p key={props.i} className=''>  Stock Disponible: <b> {stock} </b></p>
            <div className='flex justify-content=start'>
                <button className="material-icons font-semibold border border-black rounded m-1" onClick={restarClick}>expand_more</button>
                <p className='border border-black rounded px-6 cantidad m-1'>{cantidadSeleccionada}</p>
                <button className="material-icons font-semibold border border-black rounded m-1" onClick={sumarClick}>expand_less</button>
            </div>
            {cantidadSeleccionada >= 1 ? (
                <button className='mb-12 mt-8 bg-green-500 hover:font-bold font-semibold border border-black rounded m-1 p-1' 
                        onClick={agregar}>
                    Agregar al carrito
                </button>
            ):(<p></p>)
            }
            {stock === 0 && cantidadSeleccionada >= 1 ? (
                
                <p className='flex justify-center text-red-500 font-bold m-5'>
                    Lo sentimos... No hay mas stock disponible de este producto
                </p>
            ) : <p className='flex justify-center text-red-500 font-bold m-5'>
                    
                </p>
            }
        </div>
    );
}

export default ItemCount;
