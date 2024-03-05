import React from 'react';
import Item from './Item';



function ItemList(props) {
    return (
            <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6 gap-2">
                {props.data.length === 0 ? (
                    <div className='flex justify-center'>
                        <p className="font-bold texto-aparecer-desaparecer"> CARGANDO PRODUCTOS...</p>
                    </div>
                ) : (
                    props.data.map((item, i) => {
                        return <Item key={i} articulo={item} />;
                    })
                )}                   
            </section>
    );
}

export default ItemList;