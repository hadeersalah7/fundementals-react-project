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
  const [activeCategory, setActiveCategory] = useState('all')

  const filterCategories = (category) => {
    console.log(category)
    if (category === 'all') {
      setMenuItem(menu)
      setActiveCategory(category)
      return;
    }

    const categoryItem = menu.filter((item) => item.category === category)
    setMenuItem(categoryItem)
    setActiveCategory(category)
  }

  return (
    <main>
      <div className='menu'>
        <Title text="our menu" />
        <Categories categories={allCategories}
          filterCategories={filterCategories}
          activeCategory={activeCategory}
        />
        <Menu items={menuItem} />
      </div>
    </main>
  )
}

export default App
