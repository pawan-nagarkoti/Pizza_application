import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Product = ({ item }) => {
    const { image, name, price, size, _id } = item || {};
    const {cart,setCart} = useContext(CartContext);

    const addProduct = (e,product)=>{
        // console.log(product._id)
        e.preventDefault();
        const _cart = {...cart};
        // create a item key inside _cart type object.
        if(!_cart.item){
            _cart.item = {}
        }
        // insert id in item key.
        if(_cart.item[product._id]){
            _cart.item[product._id] +=  1;
            _cart.item[product._name] = _cart.item[product._name]
        }else{
            _cart.item[product._id] = 1;
            _cart.item[product._name] = _cart.item[product._name]
        }

        if(!_cart.totalItem){
            _cart.totalItem = 0;
        }
        _cart.totalItem += 1;
        setCart(_cart);
    }

    return (
        <>
            <Link to={`/products/${_id}`}>
                <div style={{ border: '1px solid black', width: 300, height: 350 }}>
                    <img src={image !== 'N/A' ? image : "https://via.placeholder.com/400"} alt="fakeImage" style={{ width: '100%', height: 250 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <p>{name}</p>
                        <p>{size}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <p>{price}</p>
                        <button onClick={(e)=>addProduct(e,item)} style={{cursor: 'pointer'}}>Add</button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Product;