import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import menu from './data'
import Menu from './components/Menu'
function App() {
const [menuItem, setMenuItem] = useState(menu)
  return (
    <main>
      <div className='menu'>
        <Title text="our menu" />
        <Menu items={menuItem} />
      </div>
    </main>
  )
}

export default App
