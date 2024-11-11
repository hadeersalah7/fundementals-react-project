import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { openModal, setPageId } = useGlobalContext();
  const handleNavChange = (e) => {
      if(!e.target.classList.contains("nav-link")){
        setPageId(null)
      }
  }
  return (
    <nav onMouseOver={handleNavChange}>
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
