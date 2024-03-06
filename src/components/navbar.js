import { Link, NavLink } from "react-router-dom";
import CartWidget from "./Cartwidget";
// import Links from "./link";
import logo from "./logo3.png"
import { useContext } from "react";
import { CartContext } from "./CartContext";

function NavBar() {
    const {usuario,updateUsuario}= useContext(CartContext);
    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userDisplayName");
        localStorage.removeItem("userEmail");
        updateUsuario(false);
    };

    return (
        <div className='flex justify-around bg-sky-300 p-2'>
            <div className="flex justify-start">
                <Link to={"/"}> <img src={logo} alt="logo de marca" className="w-10 mx-10" /> </Link>
            </div>
            <div className={`flex text-sm md:text-xl italic font-bold`}>
                <NavLink to={"/"} className="hover:text-white mx-2"> Inicio</NavLink>
                {usuario ? (
                    <div>
                        <NavLink to="/admin" className="hover:text-white mx-2 ">Admin</NavLink>
                        <button onClick={handleLogout} className="hover:text-white mx-2">Cerrar Sesión</button>
                    </div>
                ):(
                    <div className=" flex justify-center">
                        <NavLink to="/login" className="hover:text-white mx-2">Iniciar Sesión</NavLink>
                        <CartWidget />
                    </div>

                )}
            </div>
        </div>
    );
}


export default NavBar;