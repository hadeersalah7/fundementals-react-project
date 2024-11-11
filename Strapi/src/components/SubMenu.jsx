import React, { useRef } from "react";
import sublinks from "../data";
import { useGlobalContext } from "./Context";
const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  // console.log(currentPage);
  const currentPageRef = useRef(null);

  const handleSubmenuChange = (event) => {
    const submenu = currentPageRef.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX > right - 1 || clientX < left - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  };
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      ref={currentPageRef}
      onMouseLeave={handleSubmenuChange}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-link"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <a key={id} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
