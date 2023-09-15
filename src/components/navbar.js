import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";
import Links from "./link";
import logo from "./logo.png"

function NavBar (){
    return(
        <div className='flex justify-around bg-green-400 p-2 '>
            <Link to={"/"}> <img src={logo} alt="logo de marca" className="w-10" /> </Link>
            <Links/>
            <CartWidget/>
        </div>
    )
}

export default NavBar;