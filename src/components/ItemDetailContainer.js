import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { getDoc, doc, collection } from "firebase/firestore";


function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const productosCollection = collection(db,"productos");
        
        const referenciaDelDocumento = doc(productosCollection,id)

        const consulta = getDoc(referenciaDelDocumento);
        
        consulta
            .then((resultado) =>{
                setProducto(resultado.data())
            })
            .catch((error) =>{
                console.log(error)
            })
            
    }, [id]);
    return (
        <>
            <div className="flex justify-center">
                {producto ? (
                    <ItemDetail producto={producto} />
                ) : (
                    <p className="texto-aparecer-desaparecer">Cargando Producto...</p>
                )}
            </div>
        </>
    );
}

export default ItemDetailContainer;



