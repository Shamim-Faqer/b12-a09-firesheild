import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {GameContext} from "../provider/GameProvider";

function GameDetails() {
const {id} = useParams();
const {games} = useContext(GameContext);

const singleGame = games.find(game => game.id === id);



  return (
    <div>
      <div className="p-10">
      <img src={singleGame.coverPhoto} className="w-full h-96 object-cover rounded-lg"/>
      <h1 className="text-3xl font-bold mt-4">{singleGame.title}</h1>
      <p className="text-lg">{singleGame.category}</p>
      <p className="my-4">{singleGame.description}</p>
      <p>Developer: {singleGame.developer}</p>
      <p>Rating: ⭐ {singleGame.ratings}</p>
      <a 
        
        className="btn btn-primary mt-4"
      >
        Download
      </a>
    </div>
    </div>
  )
}

export default GameDetails ;