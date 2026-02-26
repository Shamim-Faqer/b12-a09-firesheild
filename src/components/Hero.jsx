import React from 'react'
import heroImg from "../assets/hero.jpeg"
import Banner from './Banner';
import { motion } from "motion/react"

function Hero() {
  return (
    <div>
          <div
  className="min-h-screen  bg-cover bg-center text-center flex items-end justify-center pb-6"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div >
    <Banner></Banner>
{
  <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className='text-5xl font-bold'
>
 The Ultimate Gaming Universe in One App
</motion.h1>
}
    <p className="py-6">Discover, download, and play thousands of top-rated games instantly. 
  Everything you love about gaming — all in one powerful platform. Browse thousands of curated titles, fast downloads, secure installs, 
  and seamless updates.</p>
    <motion.button whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="btn btn-primary text-white">Install</motion.button>
  </div>
</div>
    </div>
  )
}

export default Hero ;


