import React from 'react';
import Item from './Item';

function ItemList(props) {
    console.log(props.data);
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2">
            {props.data.length === 0 ? (
                <p className="flex justify-center font-bold texto-aparecer-desaparecer">
                    CARGANDO CATALOGO DE PRODUCTOS...
                </p>
            ) : (
                props.data.map((item, i) => {
                    return <Item key={i} articulo={item} />;
                })
            )}
        </section>
    );
}

export default ItemList;
