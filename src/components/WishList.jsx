
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../utility/addToLs";
import SingleWish from "./SingleWish";



const WishList = () => {

    const productsData = useLoaderData();
    const [products,setProducts] = useState([]);

    useEffect(() => {
        const lsData = getStoredWishList();
        const productInt = lsData.map(id => parseInt(id));

        const wishProducts = productsData.filter(p => productInt.includes(p.product_id));
        setProducts(wishProducts)

    }, [productsData])
    console.log(products)
    
    

    return (
        <div  className="w-11/12 lg:w-10/12 mx-auto space-y-3 mt-8">
            <h2 className="font-bold">WishList</h2>

            {
                 products.map(product => <SingleWish key={product.product_id} product={product}></SingleWish>)
            }

        </div>
    );
};

export default WishList;