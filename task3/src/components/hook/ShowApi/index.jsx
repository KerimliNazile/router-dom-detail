import axios from 'axios';
import { useEffect, useState } from 'react';
function ShowApi() {
    const [data, setData] = useState();

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/show");
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);

    return [data, getProducts]
}

export default ShowApi;