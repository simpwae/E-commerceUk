import React from "react";
import Nevbar from "./components/Navbar/Nevbar";
import Home from "./pages/HomePage/Home";

function AllComp() {
  return (
    <>
      <Nevbar className="z-40" />
      <Home />
    </>
  );
}

export default AllComp;
