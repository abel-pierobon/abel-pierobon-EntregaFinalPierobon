import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { db } from "../firebase";
import { getDocs, collection, query, where} from "firebase/firestore";


function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const productosCollection = collection(db,"productos");
        
        const filtroConsulta = id
        ? query(productosCollection, where("sound", "==", id))
        : productosCollection;

        const consulta = getDocs(filtroConsulta);
        
        consulta
            .then((resultado) =>{
                const aux = resultado.docs.map((doc) =>{
                    const producto = doc.data()
                    producto.id= doc.id
                    return producto
                })
                setData(aux)
            })
            .catch((error) =>{
                console.log(error)
            })
            
    }, [id]);


    return (
        <>
            <h2 className="flex justify-center bg-green-100 font-bold uppercase">{greeting}</h2>
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
