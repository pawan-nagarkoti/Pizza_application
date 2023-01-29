import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios'

const SingleProduct = () => {

    const param = useParams();
    const apiUrl = `https://star-spark-pasta.glitch.me/api/products/${param._id}`;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();


    const response = async () => {
        const apiResponse = await axios.get(apiUrl);
        setProduct(apiResponse.data);
    }
    useEffect(() => {
        response();
    }, [param._id]);
    const backToHomePage = ()=>{
        navigate('/')
    }

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h3 onClick={backToHomePage} style={{cursor: 'pointer'}}>Back</h3>
                <div style={{ border: '1px solid black', width: 300, height: 350 }}>
                    <img src={product.image !== 'N/A' ? product.image : "https://via.placeholder.com/400"}  style={{ width: '100%', height: 250 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <p>{product.name}</p>
                        <p>{product.size}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <p>{product.price}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SingleProduct;