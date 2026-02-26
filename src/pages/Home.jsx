import React from 'react';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';

import TrendingGames from '../layout/TrendingGames';
import Banner from '../components/Banner';



function Home() {
  return (
  <div>
    <Hero></Hero>
    
    <TrendingGames></TrendingGames>
    
    <NewsLetter></NewsLetter>
      
    

   
  </div>
  )
}

export default Home;