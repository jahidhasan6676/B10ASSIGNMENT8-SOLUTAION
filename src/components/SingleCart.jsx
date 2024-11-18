
import PropTypes from 'prop-types';

const SingleCart = ({ product }) => {
    const { product_title, product_image, price, description } = product;
    return (

        <>
            
            <div className="flex gap-10 items-center rounded-md p-4 bg-white">
                <div>
                    <img className="w-[150px] h-[100px] rounded-md" src={product_image} />
                </div>
                <div>
                    <h2 className="font-bold">{product_title}</h2>
                    <p className="font-medium text-sm">{description}</p>
                    <p className="font-medium">$ {price}</p>
                </div>
            </div>

        </>



    );
};

SingleCart.propTypes = {
    product: PropTypes.object
}

export default SingleCart;