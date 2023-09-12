import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";
import Links from "./link";

function NavBar (){
    return(
        <div className='flex justify-around bg-green-600 p-2 '>
            <Link to={"/"}> <h1 className='basis-1/4 text-2xl italic'>Solo guitarras</h1> </Link>
            <Links/>
            <CartWidget/>
        </div>
    )
}

export default NavBar;