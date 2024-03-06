function ProductosPedidos({productos}) {
    return (
        <article key={productos.id} className="">
            <h2 className="font-semibold text-sky-700 text-wrap">Descripcion: <span className=" text-black"> {productos.descripcion}</span></h2>
            <h2 className="font-semibold text-sky-700 text-wrap">Marca: <span className=" text-black">{productos.marca}</span></h2>
            <h2 className="font-semibold text-sky-700 text-wrap">Sonido: <span className=" text-black">{productos.sonido}</span></h2>
            <h2 className="font-semibold text-sky-700 text-wrap">Cantidad: <span className=" text-black">{productos.cantidad}</span></h2>
            <h2 className="font-semibold text-sky-700 text-wrap">Precio: <span className=" text-black">${productos.price}</span></h2>
        </article>
    )
}
export default ProductosPedidos