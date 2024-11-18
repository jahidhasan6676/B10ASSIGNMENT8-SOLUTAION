import { useEffect, useState } from "react";
import { getStoredCartList, removeCart } from "../utility/addToLs";
import { useLoaderData, useNavigate } from "react-router-dom";
import SingleCart from "./SingleCart";
import { SiFampay } from "react-icons/si";



// useEffect(() => {
//     document.title = "This is a title"
//   }, [])

const CartList = () => {
    const productData = useLoaderData();
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const [isPurchase,setIsPurchase] = useState(true)

    useEffect(() => {
        const lsData = getStoredCartList();
        const productInt = lsData.map(id => parseInt(id));

        const cartProducts = productData.filter(p => productInt.includes(p.product_id));
        setProduct(cartProducts)

        // purchase btn disable
        const purchaseBtn = productData.find(id => productInt.includes(id.product_id));
        if(purchaseBtn){
            setIsPurchase(false)
        }


        // price calculate
        const addPrice = cartProducts.reduce((previous, current) => previous + current.price, 0);
        setPrice(addPrice)

    }, [productData])


    // descending order sort cart list
    const descendingPriceSort = () => {
            const priceSort = [...product].sort((a, b) => b.price - a.price);
            setProduct(priceSort);
    }

    // handle remove cart
    const handleRemoveCart = (id) => {
        removeCart(id);
        
        if(product.length > 0){
            document.getElementById('customModal').showModal();
        }
    }

    
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto space-y-3 mt-8">

            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold">Cart</h3>
                </div>
                <div className="flex gap-3 items-center">
                    <h4 className="font-semibold">Total cost: $<span>{price}</span> </h4>
                    <button onClick={ descendingPriceSort} className="border border-purple-500 p-3 rounded-xl hover:bg-purple-600 hover:text-white font-medium">Sort by price</button>
                    <button disabled={isPurchase} onClick={() => handleRemoveCart(product.product_id)} className="btn btn-active btn-accent text-white">Purchase</button>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hidden" onClick={() => document.getElementById('customModal').showModal()}>open modal</button>
            <dialog id="customModal" className="modal w-[300px] mx-auto">
                <div className="modal-box space-y-2 text-center">
                    <span className="text-2xl flex justify-center"><SiFampay /></span>
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="text-sm font-medium text-gray-600">Thanks for purchasing.</p>
                    <p className="font-medium">Total: ${price < 0 ? price : price}</p>
                    <div className="">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={()=>navigate("/")} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {
                product.map(p => <SingleCart key={p.product_id} product={p}></SingleCart>)
            }



        </div>
    );
};

export default CartList;


