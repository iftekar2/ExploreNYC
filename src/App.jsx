import React from 'react';
import './App.css';
import NYCParks from './components/NYCparks';



const App = () => {
  return (
    <div className = "App">
      <h1>Welcome to New York City</h1>
      <h3>Explore the city the way it was meant to be explored. </h3>
      <div>
        <NYCParks />
      </div>
      
    </div>
  )
}

export default App