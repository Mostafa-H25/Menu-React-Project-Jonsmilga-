import data from './data'
import React, {useState} from 'react'

const allCategories = ['All', ...new Set(data.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems]=useState(data)
  const [categories, setCategories]= useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return;
    }
    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main >
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className='btn-container'>
          {categories.map((category, index) => {
            return (
              <button key={index} className='filter-btn' type='button' onClick={() => filterItems(category)}>
                {category}
              </button>
            )
          })}
        </div>
        <div className='section-center'>
          {menuItems.map((menuItem) => {
            return(
              <article key={menuItem.id} className='menu-item'>
                <img src={menuItem.img} alt={menuItem.title} className='photo' />
                <div className='item-info'>
                  <header>
                    <h4>{menuItem.title}</h4>
                    <h4 className='price'>${menuItem.price}</h4>
                  </header>
                  <p className='item-text'>{menuItem.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
