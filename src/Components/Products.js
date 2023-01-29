import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../pages/Product";

const Products = () => {
    const apiResponse = "https://star-spark-pasta.glitch.me/api/products";
    const [data, setData] = useState([]);
    const apiCalling = async () => {
        const response = await axios.get(apiResponse);
        setData(response.data);
    }

    useEffect(() => {
        apiCalling();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
                {
                    data.map((value,i)=> <Product item={value} key={i}/>)
                }
            </div>
        </>
    )
}

export default Products;