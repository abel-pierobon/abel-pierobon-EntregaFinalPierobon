import { useEffect,useState } from "react"
import { db } from "../firebase";
import { getDocs, collection} from "firebase/firestore";
import { toast } from 'sonner';
import Pedidos from "./Pedidos";



function Admin() {
    const [data,setData]=useState([]);
    useEffect(() =>{
        const pedidosSolicitados= collection(db,"ventas");
        const consulta=getDocs(pedidosSolicitados)

        toast.promise(consulta, {
            loading: 'Cargando pedidos',
            success: (resultado) => {
                const aux = resultado.docs.map((doc) => {
                    const pedido = doc.data()
                    pedido.id = doc.id
                    return pedido
                })
                setData(aux)
                return 'Pedidos cargados correctamente';
            },
            error: (error) => {
                return "error en carga de Pedidos"
            },
        });
    },[])
    return (
        <div>
            <h2 className=" flex justify-center font-extrabold text-sky-600 text-3xl uppercase"> Listado de pedidos</h2>
            <Pedidos data={data}/>

        </div>
    )
}
export default Admin