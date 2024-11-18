
import PropTypes from 'prop-types';
const SingleWish = ({product}) => {
    const { product_title, product_image, price, description } = product;
   
    return (
        <>
             <div className="flex gap-10 items-center rounded-md p-4 bg-white">
                <div>
                    <img className="w-[180px] h-[130px] rounded-md" src={product_image} />
                </div>
                <div className='space-y-2'>
                    
                    <h2 className="font-bold">{product_title}</h2>
                    <p className="font-medium text-sm">{description}</p>
                    <p className="font-medium">$ {price}</p>
                    <button className='bg-[#9538E2] p-2 rounded-xl text-white text-[10px]'>Add To Cart</button>
                </div>
            </div>
       
        </>
    );
};

SingleWish.propTypes = {
    product: PropTypes.object
}

export default SingleWish;