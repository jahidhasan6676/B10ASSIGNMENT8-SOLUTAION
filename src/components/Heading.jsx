import PropTypes from 'prop-types'

const Heading = ({title,subTitle}) => {
    return (
        <div className='w-full text-center bg-[#9538E2] py-10 space-y-1'>
            <h1 className='text-xl font-bold text-white'>{title}</h1>
            <p className='text-sm font-medium text-white pb-36'>{subTitle}</p>
        </div>
    );
};

Heading.propTypes ={
    title:PropTypes.string,
    subTitle:PropTypes.string

}

export default Heading;