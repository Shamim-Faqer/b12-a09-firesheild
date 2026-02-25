import React, { useContext } from 'react';
import { GameContext } from '../provider/GameProvider';
import { NavLink } from 'react-router-dom';

function TrendingGames() {
const {games} = useContext(GameContext);


  return (
    <div className='container mx-auto p-5'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Trending Games</h2>

      {/* গ্রিড কন্টেইনার ম্যাপের বাইরে থাকবে */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          // শুধুমাত্র প্রথম ৬টি গেম দেখানোর জন্য slice
          games.slice(0, 6).map(game => (
            <div key={game.id} className="card border p-4 shadow-md rounded-xl bg-white hover:scale-105 transition-transform">
              <img 
                src={game.image || game.coverPhoto} 
                alt={game.title} 
                className='w-full h-48 object-cover rounded-lg mb-4' 
              />
              <h3 className='font-bold text-xl'>{game.title}</h3>
              <p className='text-sm text-blue-600 font-medium'>{game.category}</p>
              <p className='text-gray-600 text-xs my-2 line-clamp-2'>{game.description}</p>
              
              <div className='flex justify-between items-center mt-4 pt-3 border-t'>
                <span className='text-sm font-semibold text-gray-700'>🛠 {game.developer}</span>
                <span className='text-yellow-500 font-bold'>⭐ {game.ratings}</span>
              </div>
            </div>
          ))
        }
      </div>
      
      {/* একটি বাটন যা সব গেম দেখাবে */}
      <div className='text-center mt-10'>
          <NavLink to={"/games"} className='btn btn-primary px-8'>See All Games</NavLink>
      </div>
    </div>
  )
}

export default TrendingGames;