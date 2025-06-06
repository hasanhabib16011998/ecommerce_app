import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";




function Header() {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
      setCartOpen(prev => !prev);
    };

  return (
    <>
    <header>
    <div id="top-header">
    <div className="container">
        <div className="row justify-content-between align-items-center">
        <ul className="header-links col-md-7 d-flex flex-wrap">
            <li><a href="#"><FaPhoneAlt /> +021-95-51-84</a></li>
            <li><a href="#"><MdOutlineEmail /> email@email.com</a></li>
            <li><a href="#"><FaMapMarkerAlt /> 1734 Stonecoal Road</a></li>
        </ul>
        <ul className="header-links col-md-5 d-flex justify-content-end flex-wrap">
            <li><a href="#"><FaDollarSign /> USD</a></li>
            <li><a href="#"><FaUserAlt /> My Account</a></li>
        </ul>
        </div>
    </div>
    </div>


      {/* MAIN HEADER */}
      <div id="header">
        <div className="container">
          <div className="row">
            {/* LOGO */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">Category 01</option>
                    <option value="1">Category 02</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>

            {/* ACCOUNT */}
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                {/* Wishlist */}
                <div>
                  <a href="#">
                    <FaRegHeart/>
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>

                {/* Cart */}
                <div className={`dropdown ${cartOpen ? 'open' : ''}`}>
                    <a className="dropdown-toggle" onClick={toggleCart}>
                      <FaOpencart />
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        {/* sample cart items */}
                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                          </div>
                          <button className="delete"><i className="fa fa-close"></i></button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                          </div>
                          <button className="delete"><i className="fa fa-close"></i></button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>

                {/* Menu Toggle */}
                <div className="menu-toggle">
                  <a href="#">
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                  </a>
                </div>
              </div>
            </div>
            {/* /ACCOUNT */}
          </div>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
