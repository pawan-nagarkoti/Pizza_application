import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navigation = () => {
    const totalProduct = useContext(CartContext);
    const totalCartItem = totalProduct.cart.totalItem;
    const leftNavLink = {
        display: 'flex',
        listStyle: 'none',
        gap: '1rem'
    }
    const cartItem = {
        border: '1px solid black',
        borderRadius: '24%',
        padding: '0.5rem',
        margin: '0.5rem'
    }
    return (
        <>
            <nav style={{ border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <h3>Pizza app</h3>
                <ul style={leftNavLink}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='product'>Products</Link>
                    </li>
                    <li>
                        <Link to='cart'><span>{totalCartItem === 'undefined' ? null: totalCartItem}</span>Cart</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;