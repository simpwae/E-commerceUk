import React, { useState } from "react";
import NevbarOnHover from "./NevbarOnHover";

function Nevbar() {
  const [hoveredItem, setHoveredItem] = useState(null); // Track which item is hovered or tapped
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track hamburger menu state

  // Handle hover or tap for desktop and mobile
  function handleItemInteraction(item) {
    setHoveredItem((prev) => (prev === item ? null : item)); // Toggle the item on tap/click
  }

  // Reset hovered item on leave (desktop) or when closing menu
  function onHoverLeave() {
    setHoveredItem(null);
  }

  // Toggle hamburger menu for mobile
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setHoveredItem(null); // Reset hovered item when closing menu
    }
  }

  return (
    <>
      <header className="relative z-10" onMouseLeave={onHoverLeave}>
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
          <div className="logo">LOGO</div>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-between items-center space-x-4">
            <li>
              <a
                href="#"
                onMouseEnter={() => handleItemInteraction("PRODUCTS")}
                onClick={() => handleItemInteraction("PRODUCTS")}
                className="hover:text-gray-300 transition-colors"
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseEnter={() => handleItemInteraction("ABOUT")}
                onClick={() => handleItemInteraction("ABOUT")}
                className="hover:text-gray-300 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseEnter={() => handleItemInteraction("SERVICES")}
                onClick={() => handleItemInteraction("SERVICES")}
                className="hover:text-gray-300 transition-colors"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseEnter={() => handleItemInteraction("CONTACT")}
                onClick={() => handleItemInteraction("CONTACT")}
                className="hover:text-gray-300 transition-colors"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseEnter={() => handleItemInteraction("CATEGORIES")}
                onClick={() => handleItemInteraction("CATEGORIES")}
                className="hover:text-gray-300 transition-colors"
              >
                CATEGORIES
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-2 py-4 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="w-full text-center">
              <a
                href="#"
                onClick={() => {
                  handleItemInteraction("PRODUCTS");
                }}
                className="block w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                PRODUCTS
              </a>
              {hoveredItem === "PRODUCTS" && isMenuOpen && (
                <NevbarOnHover
                  funcCall={hoveredItem}
                  classes="w-full text-black transition-all duration-300"
                  isMenuOpen={isMenuOpen}
                />
              )}
            </div>
            <div className="w-full text-center">
              <a
                href="#"
                onClick={() => {
                  handleItemInteraction("ABOUT");
                }}
                className="block w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                ABOUT
              </a>
              {hoveredItem === "ABOUT" && isMenuOpen && (
                <NevbarOnHover
                  funcCall={hoveredItem}
                  classes="w-full text-black transition-all duration-300"
                  isMenuOpen={isMenuOpen}
                />
              )}
            </div>
            <div className="w-full text-center">
              <a
                href="#"
                onClick={() => {
                  handleItemInteraction("SERVICES");
                }}
                className="block w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                SERVICES
              </a>
              {hoveredItem === "SERVICES" && isMenuOpen && (
                <NevbarOnHover
                  funcCall={hoveredItem}
                  classes="w-full text-black transition-all duration-300"
                  isMenuOpen={isMenuOpen}
                />
              )}
            </div>
            <div className="w-full text-center">
              <a
                href="#"
                onClick={() => {
                  handleItemInteraction("CONTACT");
                }}
                className="block w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                CONTACT
              </a>
              {hoveredItem === "CONTACT" && isMenuOpen && (
                <NevbarOnHover
                  funcCall={hoveredItem}
                  classes="w-full text-black transition-all duration-300"
                  isMenuOpen={isMenuOpen}
                />
              )}
            </div>
            <div className="w-full text-center">
              <a
                href="#"
                onClick={() => {
                  handleItemInteraction("CATEGORIES");
                }}
                className="block w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                CATEGORIES
              </a>
              {hoveredItem === "CATEGORIES" && isMenuOpen && (
                <NevbarOnHover
                  funcCall={hoveredItem}
                  classes="w-full text-black transition-all duration-300"
                  isMenuOpen={isMenuOpen}
                />
              )}
            </div>
            <div className="w-full text-center">
              <a
                href="#"
                onClick={() => {
                  handleItemInteraction("SEARCH");
                }}
                className="block w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                SEARCH
              </a>
              {hoveredItem === "SEARCH" && isMenuOpen && (
                <NevbarOnHover
                  funcCall={hoveredItem}
                  classes="w-full text-black transition-all duration-300"
                  isMenuOpen={isMenuOpen}
                />
              )}
            </div>
          </div>

          {/* Right Side Buttons (Desktop) */}
          <div className="hidden md:flex justify-between items-center space-x-4">
            <button className="hover:text-gray-300 transition-colors">ICON</button>
            <button
              onMouseEnter={() => handleItemInteraction("SEARCH")}
              onClick={() => handleItemInteraction("SEARCH")}
              className="hover:text-gray-300 transition-colors"
            >
              Search
            </button>
          </div>
        </nav>
        {/* Desktop Dropdown */}
        <NevbarOnHover
          funcCall={hoveredItem}
          classes={`absolute w-full text-black top-[64px] md:top-[55px] transition-all duration-300 ${
            hoveredItem && !isMenuOpen ? "visible" : "invisible"
          }`}
          isMenuOpen={isMenuOpen}
        />
      </header>
    </>
  );
}

export default Nevbar;