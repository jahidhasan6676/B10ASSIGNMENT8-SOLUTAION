import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ gadget }) => {
    
    const { product_title, product_image, price,product_id } = gadget;
    return (
        <div className="card bg-base-100 p-3">
            <figure className="">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-md h-[250px] w-full" />
            </figure>
            <div className="space-y-1 mt-2">
                <h2 className="font-bold">{product_title}</h2>
                <p className="text-sm font-normal text-gray-600">${price}</p>
                <div className="card-actions">
                    <NavLink to={`/gadgetDetails/${product_id}`} className="border px-2 py-1 rounded-xl font-medium border-[#0B0B0B] text-[#9538E2]">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

Card.propTypes ={
    gadget:PropTypes.object
}

export default Card;