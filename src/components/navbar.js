import { Link, NavLink } from "react-router-dom";
import CartWidget from "./Cartwidget";
// import Links from "./link";
import logo from "./logo3.png"
import { useState } from "react";


function NavBar() {
    const [claseb, setClaseb] = useState("linkdes");
    const [menuOpen, setMenuOpen] = useState(false); 

    const cambiarClase = () => {
        const nuevaClase = claseb === 'linkdes' ? 'linka' : 'linkdes';
        setClaseb(nuevaClase);
        setMenuOpen(!menuOpen); 
    };

    return (
        <div className='flex justify-around bg-sky-300 p-2'>
            <div className="flex">
                <div className="burger cursor-pointer" onClick={cambiarClase}>
                    <span className="material-icons">menu</span>
                </div> 
                <Link to={"/"}> <img src={logo} alt="logo de marca" className="w-10 mx-10" /> </Link>
            </div>
            <div className={`${claseb} flex text-sm md:text-2xl italic font-bold`}>
                <NavLink to="/cat/Eléctrica" className=" hover:text-white mx-2">Eléctricas</NavLink>
                <NavLink to="/cat/Acústica" className="hover:text-white mx-2">Acústicas</NavLink>
                <NavLink to="/cat/Clásica" className="hover:text-white mx-2">Clásicas</NavLink>
                <NavLink to="/ord/masvendidos" className="hover:text-white mx-2">Más vendidos</NavLink>
                <CartWidget />
            </div>
            <div className={`${claseb} linka linkas ${menuOpen ? 'open' : ''}`}>
                <div className="burger cursor-pointer" onClick={cambiarClase}>
                    <span className="material-icons font-extrabold text-3xl">close</span>
                </div> 
                <Link to={"/"} className="hover:text-white font-bold text-xl m-2"> Inicio</Link>
                <NavLink to="/cat/Eléctrica" className="hover:text-white font-bold text-xl m-2">Eléctricas</NavLink>
                <NavLink to="/cat/Acústica" className="hover:text-white font-bold text-xl m-2">Acústicas</NavLink>
                <NavLink to="/cat/Clásica" className="hover:text-white font-bold text-xl m-2">Clásicas</NavLink>
                <NavLink to="/ord/masvendidos" className="hover:text-white font-bold text-xl m-2">Más vendidos</NavLink>             
            </div>
        </div>
    );
}


export default NavBar;