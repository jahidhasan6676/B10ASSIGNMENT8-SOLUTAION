import { NavLink } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            {/* text part */}
            <div className="text-center space-y-6 bg-[#9538E2] rounded-b-md pt-5 pb-60 ">
                <h1 className="text-3xl font-bold text-white ">Upgrade Your Tech Accessorize with <br/> Gadget Heaven Accessories</h1>
                <p className="text-sm font-medium  text-white ">Enhance your tech experience with the latest and most innovative accessories from Gadget Heaven. From sleek cases  <br/> to powerful chargers, high-quality phones, computer and power bank our accessories are designed to  <br/> complement your devices and elevate your everyday life.</p>

                <NavLink to="/Dashboard">
                <button  className="bg-[#FFFFFF] px-3 py-2 rounded-2xl font-medium text-[#9538E2] mt-4">Shop now</button>
                </NavLink>
            </div>
            {/* image part */}
            <div className='mt-[-230px]'>
                <img className='h-[450px] w-[70%] mx-auto  border p-2 bg-white/20 rounded-md mt-5' src={bannerImg} />
            </div>
        </div>
    );
};

export default Banner;