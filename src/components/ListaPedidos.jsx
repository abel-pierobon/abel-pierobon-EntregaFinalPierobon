import ProductosPedidos from "./ProductosPedidos";

function ListaPedidos({ pedidos }) {

    if (!pedidos || !pedidos.cliente || pedidos.length === 0) {
        return null; 
    }

    const apellido = pedidos.cliente.apellido;
    if (apellido === undefined || apellido === null) {
        return null; 
    }
    const formatSpanishDate = (timestamp) => {
        const date = timestamp.toDate();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedDate = date.toLocaleDateString('es-ES', options) + ' ' ;
        return formattedDate;
    };
    return (
        <article key={pedidos.id} className=" flex flex-wrap justify-start border border-sky-500 rounded-2xl mx-11 my-2 p-2">
            <div className=" w-2/2 md:w-1/2">
                <h2 className=" text-sky-700 text-wrap"> Cliente:<span className=" text-black text-wrap"> {apellido}, {pedidos.cliente.nombre} </span></h2>
                <p className=" text-sky-700 text-wrap"> DNI: <span className=" text-black ">{pedidos.cliente.dni} </span></p>
                <p className=" text-sky-700 text-wrap"> Email:<span className=" text-black"> {pedidos.cliente.email} </span></p>
                <p className=" text-sky-700 text-wrap"> Dirección:<span className=" text-black"> {pedidos.cliente.dirección} </span></p>
                <p className=" text-sky-700 text-wrap"> Fecha de compra:<span className=" text-black"> {formatSpanishDate(pedidos.fecha)} hs</span></p>
            </div>
            <div className=" w-2/2 md:w-1/2">
                {pedidos.productos.length === 0 ? (
                    <div className='flex justify-center'>
                        <p></p>
                    </div>
                ) : (
                    pedidos.productos.map((item, i) => {
                        return <ProductosPedidos key={i} productos={item} />;
                    })
                )}        
            </div>
        </article>
    );
}

export default ListaPedidos;