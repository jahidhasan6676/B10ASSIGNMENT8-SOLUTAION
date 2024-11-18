import { useEffect } from "react";



const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | GadgetWave pages"
      }, [])
    return (
        <div className="text-center w-full bg-[#9538E2] py-14 space-y-1">
            <h2 className="text-xl font-bold text-white">Statistics</h2>
            <p className='text-sm font-medium text-white'>Here is the price, total and rating chart. The client can view his chart as needed</p>

           
            
        </div>
    );
};

export default Statistics;