import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img, name, seller, ratings, price,} =props.product;
    const handleAddToCart = props.handleAddToCart;
    // const handleAddToCart = (product) =>{
    //     console.log(product.id)
    // }
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} Stars</p>
          </div>
          <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Card</button>
        </div>
    );
};

export default Product;