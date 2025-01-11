import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "motion/react"

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <div className='w-full h-full bg-zinc-900 font-["satoshi_variable"] text-white'>
      <Navbar/>
      <Work />
      <Strips />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
   </div>
  )
}

export default App
