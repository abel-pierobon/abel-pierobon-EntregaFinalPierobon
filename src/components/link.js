import { NavLink } from "react-router-dom";

function Links() {
    return (  
        <div className='basis-1/4 space-x-6 text-2xl italic '>
            <NavLink to="/cat/Eléctrica" className="hover:text-white">Eléctricas</NavLink>
            <NavLink to="/cat/Acústica" className="hover:text-white">Acústicas</NavLink>
            <NavLink to="/cat/Clásica" className="hover:text-white">Clásicas</NavLink>
        </div>
    );
}

export default Links;