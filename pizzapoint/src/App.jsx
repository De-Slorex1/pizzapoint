import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/home'
import Base from './components/base'
import Toppings from './components/toppings'
import Order from './components/order'
import { useState } from 'react'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import {AnimatePresence} from 'framer-motion'
import Modal from './components/modal'

function App() {

  const [pizza, setPizza] = useState({base: "", toppings: []})
  const [showModal, setShowModal] = useState(false)

  const location = useLocation()

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
    <div className='bgContainer'>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route index path='/' element={<Home />} />
          <Route  path='/base' element={<Base addBase={addBase} pizza={pizza} />} />
          <Route  path='/toppings' element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route  path='/order' element={<Order pizza={pizza} setShowModal={setShowModal} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
