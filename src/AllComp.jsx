import React from "react";
import Nevbar from "./components/Navbar/Nevbar";
import Home from "./pages/HomePage/Home";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

function AllComp() {
  return (
    <>
      <Nevbar className="z-40" />
      <Home />
      <Cards />
      <Footer/>
    </>
  );
}

export default AllComp;
