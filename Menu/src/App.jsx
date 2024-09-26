import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import menu from './data'
import Menu from './components/Menu'
import Categories from './components/Categories'
function App() {
  const categories = ['all', ...new Set(menu.map((item) => item.category))]
  const [menuItem, setMenuItem] = useState(menu)
  const [allCategories, setAllCategories] = useState(categories)
  return (
    <main>
      <div className='menu'>
        <Title text="our menu" />
        <Categories categories={allCategories} />
        <Menu items={menuItem} />
      </div>
    </main>
  )
}

export default App
