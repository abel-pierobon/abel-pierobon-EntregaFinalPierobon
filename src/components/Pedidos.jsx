import ListaPedidos from "./ListaPedidos";

function Pedidos(props) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {props.data.length === 0 ? (
                <div className='flex justify-center'>
                    <p className="font-bold texto-aparecer-desaparecer"> CARGANDO PEDIDOS...</p>
                </div>
            ) : (
                props.data.map((item, i) => {
                    return <ListaPedidos key={i} pedidos={item} />;
                })
            )}                   
        </section>
    )
}
export default Pedidos