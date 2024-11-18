import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { addLocalStorageCart, addLocalStorageWish, getStoredWishList } from "../utility/addToLs";



const GadgetDetails = () => {

    const { id } = useParams();
    const gadgetDetailsData = useLoaderData();
    const [detailsData, setDetailsData] = useState([]);
    const [isHeart,setIsHeart] = useState(false)
    

    useEffect(() => {

        const singleData = [...gadgetDetailsData].find(gadget => gadget.product_id === parseInt(id));
        setDetailsData(singleData)

        // heart btn disabled
        const heart = getStoredWishList();
        const isExist = heart.find(p => p.Product_id === singleData.product_id)
        if(isExist){
            setIsHeart(true)
        }
        
       
    }, [gadgetDetailsData, id]);

    const { product_id, product_image, price, rating, description, Specification, product_title } = detailsData;
    


    // add local storage cart btn handler
    const handleCart = (id) => {
        addLocalStorageCart(id)

    }


    // add local storage wish btn handler
    const handleWish = (id) => {
        addLocalStorageWish(id);
        setIsHeart(true)
        
    }
    return (
        <div className="">
            {/* heading */}
            <div className="">
                <Heading title={"Product Details"} subTitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
            </div>

            {/* card design */}
            <div className=" w-[70%] mx-auto mt-[-150px]">
                <div className="card lg:card-side items-center gap-10 bg-base-100 p-4 ">
                    <figure className="lg:w-[40%]">
                        <img className="lg:h-[370px] rounded-md"
                            src={product_image}
                            alt={product_title} />
                    </figure>
                    <div className="space-y-2 lg:w-[55%]">
                        <h2 className="card-title">{product_title}</h2>
                        <p className="font-medium">Price: ${price}</p>
                        <p className="border w-fit p-1 rounded-xl text-sm">In Stock</p>
                        <p className="text-sm text-gray-500">{description}</p>
                        <p> <span className="font-bold">Specification:</span>

                            {
                                Specification && Specification.map((info, index) => <li key={index} className="text-sm text-gray-600">{info}</li>)
                            }

                        </p>
                        <p><span className="font-medium">Rating:</span></p>
                        <p className="flex gap-2 items-center">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                     />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <span>{rating}</span>
                        </p>
                        <div className="flex items-center gap-3">
                            <button onClick={() => handleCart(product_id)} className="btn bg-[#9538E2] text-white rounded-3xl">
                                Add To Card <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            </button>

                            <button disabled={isHeart}  onClick={() => handleWish(product_id)} className=" border p-2 rounded-full text-2xl"><  AiOutlineHeart /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;