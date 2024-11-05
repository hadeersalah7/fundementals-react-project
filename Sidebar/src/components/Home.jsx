import React from 'react'
import { useGlobalContext } from './AppContext'

const Home = () => {
    const { showModal, showSidebar } = useGlobalContext()
    console.log(showModal)
  return (
    <div>Home</div>
  )
}

export default Home