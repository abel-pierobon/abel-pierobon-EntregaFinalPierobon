import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from "react";
const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalProductos = cart.reduce((total, item) => total + item.quantity, 0);
    return(
        <div className="flex">
            <Link to={"/cart"} className="material-icons cartWidget " > shopping_cart </Link>
            {totalProductos === (0) ? (
                <p className="ocultar"></p>
            ) : (
                <span className=" font-black text-red-500 text-xl ">{totalProductos}</span>
            )}
        </div>
    )
}
export default CartWidget