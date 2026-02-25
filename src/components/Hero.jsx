import React from 'react'
import heroImg from "../assets/hero.jpeg"

function Hero() {
  return (
    <div>
          <div
  className="min-h-screen  bg-cover bg-center flex items-end justify-center pb-6"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="text-white p-6 text-center ">
    <h1 className="text-4xl md:text-6xl font-bold">The Ultimate Gaming Universe in One App</h1>
    <p className="py-6">Discover, download, and play thousands of top-rated games instantly. 
  Everything you love about gaming — all in one powerful platform. Browse thousands of curated titles, fast downloads, secure installs, 
  and seamless updates.</p>
    <button className="btn btn-primary text-white">Install</button>
  </div>
</div>
    </div>
  )
}

export default Hero ;