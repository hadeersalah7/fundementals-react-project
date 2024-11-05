import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../logo.svg";
import { links, social } from "../data";
import { useGlobalContext } from "./AppContext";
const Sidebar = () => {
  const { showSidebar, handleCloseSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((s) => {
          const { id, url, icon } = s;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
