import React from 'react';
import './App.css';
import pokemon from './pokemon.json';



function App() {
  return (
    <div  style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem",
    }}>
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* the was react works it needs key value where react know which component is connected to which data in html */}
          {pokemon.slice(0, 20).map(pokemon => (
            <tr
              key={pokemon.id}  
              // or
              // key={[pokemon.id, pokemon.name.english].join(':')}
              // the main thing is key needs to be unique
            >
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(', ')}</td>
          </tr>
          ))}
          
        </tbody>
      </table>  
    </div>
  );
}

export default App;
