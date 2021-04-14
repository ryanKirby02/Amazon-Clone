import './Product.css';

import StarIcon from '@material-ui/icons/Star';

const Product = ({title, image, price, rating}) => {
  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
            {Array(rating).fill().map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="product"/>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
