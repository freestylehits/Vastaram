import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const { mainT } = useSelector((state) => state);

  return (
    <div className="mainnav">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/gallery">
        <h4>Gallery</h4>
      </Link>
      {/* <div>
        <input type="search" placeholder="Search here" />
        <button>Search</button>
      </div> */}
      <Link to="/cart">
        <h4>{mainT}🛒</h4>
      </Link>
    </div>
  );
};

export default Navbar;
