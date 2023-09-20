
import { NavLink } from "react-router-dom";


function Links() {
    return (  
        <div className='space-x-4 text-sm md:text-2xl italic font-bold'>
            <NavLink to="/cat/Eléctrica" className="hover:text-red-600" >Eléctricas</NavLink>
            <NavLink to="/cat/Acústica" className="hover:text-red-600">Acústicas</NavLink>
            <NavLink to="/cat/Clásica" className="hover:text-red-600">Clásicas</NavLink>
            <NavLink to="/ord/masvendidos" className="hover:text-red-600">Mas vendidos</NavLink>
        </div>
    );
}

export default Links;