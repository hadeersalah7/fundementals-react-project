import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { openModal } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>

        <button type="button" className="toggle-btn" onClick={openModal}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
