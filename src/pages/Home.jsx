import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import { useEffect } from "react";

const Home = () => {
    const categories = useLoaderData();

        useEffect(() => {
            document.title = "GadgetWave | GadgetWave pages"
          }, [])

    return (
        <div className="">

            {/* banner section */}
            <div className=" w-11/12 lg:w-11/12 mx-auto">
           <Banner></Banner>
            </div>


            {/* dynamic section */}
           <div className="w-11/12 lg:w-10/12 mx-auto">
            <h2 className="text-xl font-bold text-center mb-10 mt-10">Explore Cutting-Edge Gadgets</h2>
           <div className="flex gap-5">
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            </div>
        
           </div>
        </div>
    );
};

export default Home;