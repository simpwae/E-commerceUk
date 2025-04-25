import React from "react";

function NevbarOnHover({ funcCall, classes, isMenuOpen }) {
  const baseStyles = "w-full z-50 text-center transition-all duration-300";
  const dropdownStyles = isMenuOpen
    ? "h-20 text-base bg-opacity-90 shadow-md"
    : "h-16 text-base";
  const inputStyles = "w-11/12 mx-auto mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300";

  return (
    <div className={`${classes} ${isMenuOpen ? "relative" : "absolute"}`}>
      {funcCall === "PRODUCTS" && (
        <div className={`${baseStyles} z-40 bg-green-200 ${dropdownStyles}`}>
          Product
        </div>
      )}
      {funcCall === "ABOUT" && (
        <div className={`${baseStyles} bg-blue-200 ${dropdownStyles}`}>
          About
        </div>
      )}
      {funcCall === "SERVICES" && (
        <div className={`${baseStyles} bg-yellow-200 ${dropdownStyles}`}>
          Services
        </div>
      )}
      {funcCall === "CONTACT" && (
        <div className={`${baseStyles} bg-red-200 ${dropdownStyles}`}>
          Contact
        </div>
      )}
      {funcCall === "CATEGORIES" && (
        <div className={`${baseStyles} bg-purple-200 ${dropdownStyles}`}>
          Categories
        </div>
      )}
      {funcCall === "SEARCH" && (
        <div className={`${baseStyles} bg-purple-200 ${dropdownStyles}`}>
          Search
          {isMenuOpen && (
            <input
              type="text"
              placeholder="Search..."
              className={inputStyles}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default NevbarOnHover;