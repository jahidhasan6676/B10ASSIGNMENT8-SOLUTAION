import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | GadgetWave pages"
      }, [])
   
    return (
        <div>
            {/* text part */}
            <div className="text-center bg-[#9538E2] text-white py-8 space-y-5">
                <div className="space-y-1">
                <h2 className="text-2 xl font-bold">Dashboard</h2>
                <p className="text-sm font-medium">Here you can add some items to your cart and wishlist to keep your cart. You can see the price of the carts in <br/> large to small serials and you can see the price of all the carts.</p>
                </div>
                <div className="space-x-3">
                    <NavLink to="/Dashboard/cart" className={ ({isActive})=> ` border px-4 py-3 rounded-md  font-medium   ${isActive? "bg-white text-black" :'hover:bg-white hover:text-black'}`}>Cart</NavLink>
                    <NavLink to="/Dashboard/wish" className={ ({isActive})=> ` border px-4 py-3 rounded-md  font-medium ${isActive? "bg-white text-black" :'hover:bg-white hover:text-black '}`}>WishList</NavLink>
                </div>

            </div>
           <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;