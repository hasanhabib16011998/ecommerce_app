import React from "react";
import shop01 from '../assets/shop01.png';
import shop02 from '../assets/shop02.png';
import shop03 from '../assets/shop03.png';
import { IoArrowForwardCircleSharp } from "react-icons/io5";


type ShopItem = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  link: string;
};

const shopItems: ShopItem[] = [
  {
    imgSrc: `${shop01}`,
    imgAlt: "Laptops",
    title: "Laptop\nCollection",
    link: "#",
  },
  {
    imgSrc: `${shop02}`,
    imgAlt: "Accessories",
    title: "Accessories\nCollection",
    link: "#",
  },
  {
    imgSrc: `${shop03}`,
    imgAlt: "Cameras",
    title: "Cameras\nCollection",
    link: "#",
  },
];

const ShopSection: React.FC = () => (
  <div className="section">
    <div className="container">
      <div className="row">
        {shopItems.map((item, idx) => (
          <div className="col-md-4 col-xs-6" key={idx}>
            <div className="shop">
              <div className="shop-img">
                <img src={item.imgSrc} alt={item.imgAlt} />
              </div>
              <div className="shop-body">
                <h3>
                  {item.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <a href={item.link} className="cta-btn">
                  Shop now <i><IoArrowForwardCircleSharp/></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ShopSection;