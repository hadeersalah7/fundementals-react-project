import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "./Context";
const Sidbar = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <aside className={isModalOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button onClick={closeModal} className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { page, pageId, links } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, id, icon, label } = link;
                    return (
                      <a key={id} href={url}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidbar;
