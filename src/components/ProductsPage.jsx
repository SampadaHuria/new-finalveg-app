

import React from 'react';
import './ProductsPage.css'; 
import veggie1 from '../images/product-1.jpg';
import veggie2 from '../images/product-2.jpg';
import veggie3 from '../images/product-3.jpg';
import veggie4 from '../images/product-4.jpg';
import veggie5 from '../images/product-5.jpg';
import veggie6 from '../images/product-6.jpg';
import veggie7 from '../images/product-7.jpg';
import veggie8 from '../images/product-8.jpg';
import veggie9 from '../images/product-9.jpg';
import veggie10 from '../images/product-10.jpg';
import veggie11 from '../images/product-11.jpg';
import veggie12 from '../images/product-12.jpg';


const ProductsPage = () => {
  const vegetables = [
    { name: 'Vegetable 1', price: 'Rs-10.99', image: veggie1 },
    { name: 'Vegetable 2', price: 'Rs-20.49', image: veggie2 },
    { name: 'Vegetable 3', price: 'Rs-33.49', image: veggie3 },
    { name: 'Vegetable 4', price: 'Rs-42.49', image: veggie4 },
    { name: 'Vegetable 5', price: 'Rs-21.49', image: veggie5 },
    { name: 'Vegetable 6', price: 'Rs-60.49', image: veggie6 },
    { name: 'Vegetable 7', price: 'Rs-23.49', image: veggie7 },
    { name: 'Vegetable 8', price: 'Rs-14.49', image: veggie8 },
    { name: 'Vegetable 9', price: 'Rs-35.49', image: veggie9 },
    { name: 'Vegetable 10', price: 'Rs-62.49', image: veggie10 },
    { name: 'Vegetable 11', price: 'Rs-71.49', image: veggie11 },
    { name: 'Vegetable 12', price: 'Rs-50.49', image: veggie12 },


    
  ];

  return (
    <div className="products-page">
      <h2 className="bold-line">Featured Products</h2>
      <p className="small-line">Our Products</p>
      <p className="slant-line">
        Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia
      </p>
      <div className="product-grid">
        {vegetables.map((vegetable, index) => (
          <div className="product-item" key={index}>
            <img src={vegetable.image} alt={vegetable.name} />
            <div className="product-details">
              <h3>{vegetable.name}</h3>
              <p>{vegetable.price}</p>
              <div className="product-options">
                <div className="wishlist">Wishlist</div>
                <div className="cart">Add to Cart</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

// import React, { useState } from 'react';
// import './ProductsPage.css'; // Add your custom styles here
// import veggie1 from '../images/product-1.jpg';
// import veggie2 from '../images/product-2.jpg';
// import veggie3 from '../images/product-3.jpg';
// import veggie4 from '../images/product-4.jpg';
// import veggie5 from '../images/product-5.jpg';
// import veggie6 from '../images/product-6.jpg';
// import veggie7 from '../images/product-7.jpg';
// import veggie8 from '../images/product-8.jpg';
// import veggie9 from '../images/product-9.jpg';
// import veggie10 from '../images/product-10.jpg';
// import veggie11 from '../images/product-11.jpg';
// import veggie12 from '../images/product-12.jpg';
// // ... Import all other vegetable images similarly ...

// const ProductsPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const updatedCartItems = [...cartItems, product];
//     setCartItems(updatedCartItems);
//   };

//   const vegetables = [
//     { name: 'Vegetable 1', price: 'Rs-10.99', image: veggie1 },
//     { name: 'Vegetable 2', price: 'Rs-20.49', image: veggie2 },
//     { name: 'Vegetable 3', price: 'Rs-33.49', image: veggie3 },
//     { name: 'Vegetable 4', price: 'Rs-42.49', image: veggie4 },
//     { name: 'Vegetable 5', price: 'Rs-21.49', image: veggie5 },
//     { name: 'Vegetable 6', price: 'Rs-60.49', image: veggie6 },
//     { name: 'Vegetable 7', price: 'Rs-23.49', image: veggie7 },
//     { name: 'Vegetable 8', price: 'Rs-14.49', image: veggie8 },
//     { name: 'Vegetable 9', price: 'Rs-35.49', image: veggie9 },
//     { name: 'Vegetable 10', price: 'Rs-62.49', image: veggie10 },
//     { name: 'Vegetable 11', price: 'Rs-71.49', image: veggie11 },
//     { name: 'Vegetable 12', price: 'Rs-50.49', image: veggie12 },
//   ];

//   return (
//     <div className="products-page">
//       <h2 className="bold-line">Featured Products</h2>
//       <p className="small-line">Our Products</p>
//       <p className="slant-line">
//         Far far away, behind the word mountains, far from the countries
//         Vokalia and Consonantia
//       </p>
//       <div className="product-grid">
//         {vegetables.map((vegetable, index) => (
//           <div className="product-item" key={index}>
//             <img src={vegetable.image} alt={vegetable.name} />
//             <div className="product-details">
//               <h3>{vegetable.name}</h3>
//               <p>{vegetable.price}</p>
//               <div className="product-options">
//                 <div className="wishlist">Wishlist</div>
//                 <div className="cart" onClick={() => addToCart(vegetable)}>
//                   Add to Cart
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
