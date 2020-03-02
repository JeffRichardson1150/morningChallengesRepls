// import React, { useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';
// import {setState} from 'react';

// import logo from './logo.svg';
import
 './App.css';

function App() {

  const [dogImage, setDogImage ] = useState('');

  useEffect(() => {
    fetch('https://random.dog/woof.json')
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
      setDogImage(result.url);
    })
    .catch(e => {
      console.error(e);
    })

  }, [])

  const fireDogGet = () => {

    
  }

  return (

    <div className="App">
        <button onClick={ fireDogGet }> 
          Get a dog
        </button>
        <br />
        <img style={{ height: 400, width: 400 }} src={dogImage} alt="Cool Doggo" />
    </div>

    )
      
}
    
export default App;
