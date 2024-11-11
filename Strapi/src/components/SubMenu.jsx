import React from 'react'
import sublinks from '../data'
import { useGlobalContext } from './Context'
const SubMenu = () => {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId)
  console.log(currentPage)
  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"}>
      <h5>{currentPage?.page}</h5>
      <div className="submenu-link" style={{
        gridTemplateColumns:
          currentPage?.links?.length > 3 ?
      "1fr 1fr" : "1fr"
    }}>
        {currentPage?.links?.map((link) => {
          const { id, url, icon, label } = link
          return <a key={id} href={url}>{icon} {label}</a>
})}
      </div>
    </div>
  )
}

export default SubMenu