import React, { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { db } from "../firebase";
import { getDocs, collection, query, where, orderBy,limit } from "firebase/firestore";
import { toast } from 'sonner';


function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const productosCollection = collection(db, "productos");

        let filtroConsulta;

        if (id === "asc") {
            filtroConsulta = query(productosCollection, orderBy("price", "asc"));
        } else if (id === "desc") {
            filtroConsulta = query(productosCollection, orderBy("price", "desc"));
        }  else if (id === "masvendidos") {
            filtroConsulta = query(productosCollection, orderBy("sold_quantity", "desc"),limit(6));
        }else if (id) {
            filtroConsulta = query(productosCollection, where("sound", "==", id));
        } else {
            filtroConsulta = productosCollection;
        }

        const consulta = getDocs(filtroConsulta);

        toast.promise(consulta, {
            loading: 'Cargando Productos',
            success: (resultado) => {
                const aux = resultado.docs.map((doc) => {
                    const producto = doc.data()
                    producto.id = doc.id
                    return producto
                })
                setData(aux)
                return 'Productos cargados correctamente';
            },
            error: (error) => {
                return "error en carga de productos"
            },
        });
    }, [id]);

    return (
        <>
            <h2 className="flex justify-center font-black text-3xl uppercase mb-4 m-4">{greeting}</h2>
            <div className="flex justify-center m-6">
                <p className="font-black">Ordenar por:</p>
                <NavLink to="/" className="hover:text-red-600 px-1 font-bold material-icons">filter_alt_off</NavLink>
                <NavLink to="/ord/asc" className="hover:text-red-600 px-1 font-bold">Precio Menor</NavLink>
                <NavLink to="/ord/desc" className="hover:text-red-600 px-1 font-bold">Precio Mayor</NavLink>
            </div>
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
