import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css'
const Shope = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(()=>{ 
    fetch('products.json')
    .then(res => res.json())
    .then(data =>setProducts(data))
  },[]);
useEffect(()=>{
  const savedCart = [];
  const storedCart = getShoppingCart();
  // step 1: get id of the addedProduct
  for(const id in storedCart){
  //  step 2: get product from products state by using id
  const addedProduct = products.find(product => product.id === id);
  if(addedProduct){
    // step 3: add quantity 
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;
  //  step 4: add the added product to the saved cart 
    savedCart.push(addedProduct);
  }
  // step 5:set the cart
  setCart(savedCart);
  console.log('addedProduct',addedProduct)
  }
},[products] )

  const handleAddToCart = (product) =>{

     let newCart = [];
  //  const newCart = [...cart, product];Option 3.
    //if product does not exist in the cart, then set quantity = 1;
    // if exist update the quantity by one.
  const exists = cart.find(pd => pd.id === product.id);
  if(!exists){
    product.quantity = 1;
    newCart =[...cart, product]
  }
  else{
exists.quantity = exists.quantity + 1;
const remaining = cart.filter(pd => pd.id != product.id)
newCart = [...remaining, exists]

  }
   setCart(newCart);
   addToDb(product.id);
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

            <Cart cart ={cart}></Cart>
          </div>
        </div>
    );
};

export default Shope;