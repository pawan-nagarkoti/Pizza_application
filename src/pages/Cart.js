import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
    const data = useContext(CartContext);
    const product = data?.cart?.item;
    const [productDetail, setProductDetail] = useState();


    // await axios.get(`https://star-spark-pasta.glitch.me/api/products/${test}`);
    useEffect(() => {
        if (!product) {
            return 'Loading...'
        }
        const test = Object.keys(product);
        test.map(async (item) => {
            let a = await axios.get(`https://star-spark-pasta.glitch.me/api/products/${item}`);
            setProductDetail(a.data)
        })
    }, [product]);
    console.log(productDetail)
    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Cart Item</h3>

            {
                // productDetail.map((value)=>{
                //     console.log(value)
                //     return(
                //         <>
                //             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6rem' }}>
                //                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                //                     <img src="https://picsum.photos/200/300" alt="pizzaImage" style={{ width: 100, height: 100, borderRadius: '.8rem' }} />
                //                     <p>Nagarkoti</p>
                //                 </div>
                //                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                //                     <button>-</button>
                //                     <p>value</p>
                //                     <button>+</button>
                //                 </div>
                //                 <div>
                //                     <span>500</span>
                //                 </div>
                //                 <div>
                //                     <button>Delete</button>
                //                 </div>
                //             </div>
                //         </>
                //     )
                // }) 
            }
        </>
    )
}

export default Cart;