import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import product1 from '../../assets/product01.png';
import product2 from '../../assets/product02.png';
import { RxCross2 } from "react-icons/rx";

interface CartDropdownProps {
  isOpen: boolean;
  toggleCart: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, toggleCart }) => {
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <a className="dropdown-toggle" onClick={toggleCart}>
        <i><FaOpencart /></i>
        <span>Your Cart</span>
        <div className="qty">3</div>
      </a>
      <div className="cart-dropdown">
        <div className="cart-list">
          <div className="product-widget">
            <div className="product-img">
              <img src={product1} alt="Product 1" />
            </div>
            <div className="product-body">
              <h3 className="product-name"><a href="#">product name goes here</a></h3>
              <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
            </div>
            <button className="delete"><i><RxCross2/></i></button>
          </div>

          <div className="product-widget">
            <div className="product-img">
              <img src={product2} alt="Product 2" />
            </div>
            <div className="product-body">
              <h3 className="product-name"><a href="#">product name goes here</a></h3>
              <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
            </div>
            <button className="delete"><i><RxCross2/></i></button>
          </div>
        </div>

        <div className="cart-summary">
          <small>3 Item(s) selected</small>
          <h5>SUBTOTAL: $2940.00</h5>
        </div>

        <div className="cart-btns">
          <a href="#">View Cart</a>
          <a href="#">Checkout <i className="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
