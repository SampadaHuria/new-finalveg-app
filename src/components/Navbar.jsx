
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">SABJIVANI</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <Link to="/contact">
        <li><a href="#contact">Contact</a></li>
        </Link>
        <Link to="/cart">
        <li><a href="#cart">Cart</a></li>
        </Link>
        <li className="dropdown">
        {/* <Link to="/products">Products</Link> */}
          <a href="#products">Products</a>
          <ul className="dropdown-content">
            <li><a href="#wishlist">Wishlist</a></li>
            <Link to="/products">
            <li><a href="#products-section">Products</a></li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
