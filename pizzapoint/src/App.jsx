import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Base from './components/base'
import Toppings from './components/toppings'
import Order from './components/order'
import { useState } from 'react'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import {motion} from 'framer-motion'

function App() {

  const [pizza, setPizza] = useState({base: "", toppings: []})

  const addBase = (base) => {
    setPizza({...pizza, base})
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping]
    }
    else {
      newToppings = pizza.toppings.filter((item) => item !== topping)
    }
    setPizza({...pizza, toppings: newToppings})
  }
  
  return (
    <motion.div className='bgContainer'>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route  path='/base' element={<Base addBase={addBase} pizza={pizza} />} />
        <Route  path='/toppings' element={<Toppings addTopping={addTopping} pizza={pizza} />} />
        <Route  path='/order' element={<Order pizza={pizza} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </motion.div>
  )
}

export default App
