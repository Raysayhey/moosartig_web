import React, { useState } from 'react'
import Breakfast from './breakfast'
import Lunch from './lunch'
import HotDrinks from './hot-drinks'
import ColdDrinks from './cold-drinks'
import Brunch from './brunch'

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState('hotDrinks');
  let SelectedCategory;
  if (menuCategory === 'hotDrinks' ) {
    SelectedCategory = HotDrinks;
  } else if (menuCategory === 'coldDrinks') {
    SelectedCategory = ColdDrinks
  } else if (menuCategory === 'breakfast') {
    SelectedCategory = Breakfast
  } else if (menuCategory === 'lunch') {
    SelectedCategory = Lunch
  } else if (menuCategory === 'brunch') {
    SelectedCategory = Brunch
  }
  
  return (
    <section className="menu">
      <h2>Unser Angebot</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory('hotDrinks')}>zMorge</li>
        <li className="menu-header" onClick={() => setMenuCategory('coldDrinks')}>zMittag</li>
        <li className="menu-header" onClick={() => setMenuCategory('breakfast')}>zVieri</li>
        <li className="menu-header" onClick={() => setMenuCategory('brunch')}>Samstig Brunch</li>

        <li className="menu-header" onClick={() => setMenuCategory('lunch')} >ichaufe</li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu;