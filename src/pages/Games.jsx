import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../provider/GameProvider';

function Games() {
 const {games} = useContext(GameContext);
  const [category, setCategory] = useState("All");


  const selectedCategories = ["All", ...new Set(games.map(game => game.category))];

 
  const filteredGame = category === "All" ? games : games.filter(game => game.category === category);

  return (
    <div className='p-5'>
      <h2 className='text-2xl font-bold mb-4'>Popular Games are here...</h2>
      
      <div className='grid grid-cols-4 gap-4'> {/* মেইন গ্রিড ৪ কলামের */}
        
        {/* ক্যাটাগরি সেকশন (১ কলাম) */}
        <div className="category col-span-1 flex flex-col gap-2">
          {selectedCategories.map(cata => (
            <button 
              key={cata} 
              onClick={() => setCategory(cata)} // ক্যাটাগরি চেঞ্জ করার ফাংশন
              className={`btn ${category === cata ? 'btn-primary' : 'btn-outline'}`}
            >
              {cata}
            </button>
          ))}
        </div>

        {/* গেম কার্ড সেকশন (৩ কলাম) */}
        <div className="games col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            filteredGame.map(game => (
              <div key={game.id} className="card border p-3 shadow-sm rounded-lg">
                <img src={game.coverPhoto} alt="" />
                <h3 className='font-bold'>{game.title}</h3>
                <p className='text-sm text-gray-500'>{game.category}</p>
                <p className='text-xs my-2'>{game.description}</p>
                <p className='text-sm font-semibold'>Dev: {game.developer}</p>
                <p className='text-yellow-600'>Rating: {game.ratings}</p>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default Games;