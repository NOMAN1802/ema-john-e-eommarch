import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shope.css'
const Shope = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data =>setProducts(data))
  },[]);
  const handleAddToCart = (product) =>{
    console.log(product)
}
    return (
        <div className='shope-container'>
          <div className="product-container">
             {
               products.map(product => <Product
               key = {product.id}
               product ={product}
               handleAddToCart ={handleAddToCart}
               ></Product>)
             }
          </div>
          
          <div className="cart-container">

            <h4>Order Summary</h4>
          </div>
        </div>
    );
};

export default Shope;