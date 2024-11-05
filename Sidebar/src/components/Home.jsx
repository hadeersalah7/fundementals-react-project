import React from 'react'
import { useGlobalContext } from './AppContext'
import {FaBars} from "react-icons/fa"
const Home = () => {
  const { handleOpenModal, handleShowSidebar } = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={handleShowSidebar}>
        <FaBars />
      </button>

      <button className='btn' onClick={handleOpenModal}>show modal</button>
    </main>
  )
}

export default Home