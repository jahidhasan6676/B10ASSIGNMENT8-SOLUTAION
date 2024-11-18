import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const MainLayouts = () => {
    // bg-[#9538E2] w-11/12 lg:w-11/12 mx-auto
    const {pathname} = useLocation();
   
    return (
        <div>
           
           <div className={`w-11/12 lg:w-11/12 mx-auto ${pathname === '/' || pathname.includes('/gadgets') ? 'bg-[#9538E2] text-white':''}`}>
            <Navbar></Navbar>
          
           </div>
           

           <div className="min-h-[calc(100vh-298px)]">
           <Outlet></Outlet>
           </div>



           {/* footer */}
           <Footer></Footer>
           
        </div>
    );
};

export default MainLayouts;