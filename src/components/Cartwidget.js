import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from "react";
const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalProductos = cart.reduce((total, item) => total + item.quantity, 0);
    return(
        <div className="flex">
            {totalProductos === (0) ? (
                <p className="ocultar"></p>
            ) : (
                <span className="font-semibold font-light bg-red-600 text-slate-100 rounded-full px-1 h-6">{totalProductos}</span>
            )}
            <Link to={"/cart"} className="material-icons cartWidget " > shopping_cart </Link>
            
        </div>
    )
}
export default CartWidget