import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div className='flex flex-col space-y-3 bg-white p-5 w-[180px] h-[410px] text-center rounded-md'>

            <NavLink className="font-medium btn rounded-xl bg-[#9538E2] text-white">All Product</NavLink>

            {
                categories.map(category =>
                    <NavLink to={`/gadgets/${category.category}`} key={category.id} className={({ isActive }) => `font-medium btn p-2 rounded-xl ${isActive ? "bg-[#9538E2] text-white" : 'hover:bg-[#9538E2] hover:text-white'}`}>

                        {category.category}
                    </NavLink>
                   
                )
            }
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array
}

export default Categories;