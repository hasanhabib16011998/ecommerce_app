import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import CartDropdown from './CartDropdown';




const Header: React.FC = () => {
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const toggleCart = (): void => setCartOpen(prev => !prev);
    const [navActive, setNavActive] = useState(false);

    const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      setNavActive((prev) => !prev);
    };

  return (
    <>
    <header>
    <div id="top-header">
    <div className="container">
        <div className="row justify-content-between align-items-center">
        <ul className="header-links col-md-7 d-flex flex-wrap">
            <li><a href="#"><i><FaPhoneAlt /></i> +021-95-51-84</a></li>
            <li><a href="#"><i><MdOutlineEmail /></i> email@email.com</a></li>
            <li><a href="#"><i><FaMapMarkerAlt /></i> 1734 Stonecoal Road</a></li>
        </ul>
        <ul className="header-links col-md-5 d-flex justify-content-end flex-wrap">
            <li><a href="#"><i><FaDollarSign /></i> USD</a></li>
            <li><a href="#"><i><FaUserAlt /></i> My Account</a></li>
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
                  <a href="#" onClick={handleToggle}>
                    <i><MdMenu/></i>
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


      <nav id="navigation">
      <div className="container">
        <div id="responsive-nav" className={navActive ? "active" : ""}>
          <ul className="main-nav nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Hot Deals</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Smartphones</a></li>
            <li><a href="#">Cameras</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>
      </div>
    </nav>


    </>
   )
  
}

export default Header;
