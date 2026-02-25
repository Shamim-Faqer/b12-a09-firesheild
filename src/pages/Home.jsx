import React from 'react';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';
import Aboutme from '../components/Aboutme';
import Contactus from '../components/Contactus';
import Games from '../pages/Games';



function Home() {
  return (
  <div>
    <Hero></Hero>
      <NewsLetter></NewsLetter>
     <Aboutme></Aboutme>
    <Contactus></Contactus>
<Games></Games>
   
  </div>
  )
}

export default Home;