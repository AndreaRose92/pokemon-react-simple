import React, { useState } from 'react';
import '../styles/App.css';

function App() {

  let [num, setNum] = useState(2)

  function populate() {
   fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(r=>r.json()).then(data=>{
    fetch(`http://localhost:4000/pokedex`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: data.name,
        species: data.species.url,
        sprite: data.sprites["front_default"],
        dexSprite: data.sprites.other["official-artwork"]["front_default"],
        types: data.types
      })
    })
  });
  setNum(++num)
}

  return (
    <div>
      <button onClick={()=>populate()}>Post</button>
    </div>
  );
}

export default App;
