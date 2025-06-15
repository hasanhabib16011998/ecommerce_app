import React from "react";
import Slider from "react-slick";
import product01 from '../assets/product01.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductRating from "./ui/ProductRating";
import { FiHeart } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



// Product type for clarity
type Product = {
  imgSrc: string;
  imgAlt: string;
  labels?: { type: "sale" | "new"; value: string }[];
  category: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number; // out of 5
};

// Dummy product data (replace with real data if needed)
const products: Product[] = [
  {
    imgSrc: `${product01}`,
    imgAlt: "Product 1",
    labels: [{ type: "sale", value: "-30%" }, { type: "new", value: "NEW" }],
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 5,
  },
  {
    imgSrc: `${product01}`,
    imgAlt: "Product 2",
    labels: [{ type: "new", value: "NEW" }],
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 4,
  },
  {
    imgSrc: `${product01}`,
    imgAlt: "Product 3",
    labels: [{ type: "sale", value: "-30%" }],
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 0,
  },
  {
    imgSrc: `${product01}`,
    imgAlt: "Product 4",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 5,
  },
  {
    imgSrc: `${product01}`,
    imgAlt: "Product 5",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 5,
  },
];

const tabItems = ["Laptops", "Smartphones", "Cameras", "Accessories"];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5, // Adjust based on screen size if needed
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
  arrows: true,
  nextArrow: <div className="slick-arrow slick-next" />,
  prevArrow: <div className="slick-arrow slick-prev" />,
};

const NewProducts: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">New Products</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  {tabItems.map((item, i) => (
                    <li className={i === 0 ? "active" : ""} key={item}>
                      <a data-toggle="tab" href="#tab1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* /Section Title */}

          {/* Products Tab & Slick */}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                {/* Tab */}
                <div id="tab1" className="tab-pane active">
                  <Slider {...sliderSettings} className="products-slick" data-nav="#slick-nav-1">
                    {products.map((product, idx) => (
                      <div className="product" key={idx}>
                        <div className="product-img">
                          <img src={product.imgSrc} alt={product.imgAlt} />
                          {(product.labels && product.labels.length > 0) && (
                            <div className="product-label">
                              {product.labels.map((label, i) =>
                                <span className={label.type} key={i}>{label.value}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h3 className="product-name">
                            <a href="#">{product.name}</a>
                          </h3>
                          <h4 className="product-price">
                            {product.price}
                            {product.oldPrice && (
                              <del className="product-old-price">{product.oldPrice}</del>
                            )}
                          </h4>
                          <ProductRating rating={product.rating} />
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <i><FiHeart/></i>
                              <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                              <i><FaExchangeAlt/></i>
                              <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                              <i><FaEye/></i>
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <i className="fa fa-shopping-cart"></i> add to cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <div id="slick-nav-1" className="products-slick-nav"></div>
                </div>
                {/* /Tab */}
              </div>
            </div>
          </div>
          {/* /Products Tab & Slick */}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;