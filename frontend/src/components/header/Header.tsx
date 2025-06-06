import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import CartDropdown from './CartDropdown';




const Header: React.FC = () => {
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const toggleCart = (): void => setCartOpen(prev => !prev);

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
                    <i><FaRegHeart/></i>
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>

                {/* Cart Dropdown */}
                <CartDropdown isOpen={cartOpen} toggleCart={toggleCart} />

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
   )
  
}

export default Header;
