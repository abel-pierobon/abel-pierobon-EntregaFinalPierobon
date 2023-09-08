import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from "react";
const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalProductos = cart.reduce((total, item) => total + item.quantity, 0);
    return(
        <div className="flex flex-col">
            {totalProductos === 0 ? (
                <p className='hidden'></p>
            ) : (
                <span className="bg-red-600 font-semibold rounded-full flex justify-center span">{totalProductos}</span>
            )}
            {/* <span className="bg-red-600 font-semibold rounded-full flex justify-center span">{totalProductos}</span> */}
            <Link to={"/cart"} className="material-icons cartWidget" > shopping_cart </Link>
            
        </div>
    )
}
export default CartWidget