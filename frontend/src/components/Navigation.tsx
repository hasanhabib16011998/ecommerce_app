import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [navActive, setNavActive] = useState(false);

  const handleToggle = () => setNavActive((active) => !active);
  const closeNav = () => setNavActive(false);

  return (
    <nav id="navigation">
      <div className="container">
        {/* Hamburger/Menu icon for mobile */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={handleToggle}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 24,
            position: "absolute",
            top: 18,
            left: 18,
            zIndex: 30,
          }}
        >
          <span style={{ fontSize: "2rem", color: "#D10024" }}>&#9776;</span>
        </button>
        {/* Responsive nav */}
        <div
          id="responsive-nav"
          className={navActive ? "active" : ""}
          style={{
            transition: "0.2s all",
          }}
        >
          <ul className="main-nav nav navbar-nav">
            <li className="active" onClick={closeNav}>
              <a href="#">Home</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Hot Deals</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Categories</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Laptops</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Smartphones</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Cameras</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>
        {/* Overlay to close menu on mobile */}
        {navActive && (
          <div
            onClick={closeNav}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.1)",
              zIndex: 21,
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;