

const Footer = () => {
    return (
        <div className="w-full bg-white py-8 mt-12">
            {/* title part */}
            <div className="text-center">
                <h3 className="text-xl font-bold">Gadget Heaven</h3>
                <p className="text-sm font-medium text-gray-500 mt-1">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            {/* bottom border */}
            <div className="border mt-4 w-11/12 lg:w-10/12 mx-auto"></div>

            {/* main part */}
            <footer className="w-11/12 lg:w-8/12 mx-auto  space-y-6 mt-4 md:flex justify-between">
                <nav className="flex flex-col">
                    <h6 className="font-bold">Services</h6>
                    <a className="link link-hover text-sm font-medium text-gray-500">Product Support</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Order Tracking</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Shipping & Delivery</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Returns</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="font-bold">Company</h6>
                    <a className="link link-hover text-sm font-medium text-gray-500">About us</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Contact</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Careers</a>
                    
                </nav>
                <nav className="flex flex-col">
                    <h6 className="font-bold">Legal</h6>
                    <a className="link link-hover text-sm font-medium text-gray-500">Terms of service</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Privacy policy</a>
                    <a className="link link-hover text-sm font-medium text-gray-500">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;