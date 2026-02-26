import React from 'react';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';
import Aboutme from '../components/Aboutme';
import Contactus from '../components/Contactus';
import TrendingGames from '../layout/TrendingGames';
import Banner from '../components/Banner';



function Home() {
  return (
  <div>
    
    <Hero></Hero>
      <NewsLetter></NewsLetter>
      <TrendingGames></TrendingGames>
     <Aboutme></Aboutme>
    <Contactus></Contactus>

   
  </div>
  )
}

export default Home;