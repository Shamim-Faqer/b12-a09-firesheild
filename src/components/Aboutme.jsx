import React from 'react';
import AboutmeImg from "../assets/Icon (2).png";

function Aboutme() {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center 
                      m-4 md:m-8 pb-8 md:pb-12 gap-8'>

        <div className="left flex-1 space-y-6">
                  
                  
                  <div className="relative">
                    <img 
                      src={AboutmeImg} 
                      alt="Contact Illustration" 
                      className="w-full max-w-sm object-contain"
                    />
                  </div>
                </div>

        <div className="right flex-1 text-center md:text-left">
          <h2 className='mb-4 md:mb-5 text-2xl sm:text-3xl md:text-4xl font-bold'>
            About us
          </h2>

          <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
            "Built by gamers, for gamers. At WebSheild, we believe that gaming is more than just a hobby—it is an adventure. We have curated an elite collection of action-packed RPGs, mind-bending puzzles, and competitive multiplayer games to fuel your passion. Whether you are a casual player or a hardcore pro, we are here to level up your mobile experience with the best titles on the market."
          </p>
        </div>

      </div>
    </div>
  )
}

export default Aboutme;