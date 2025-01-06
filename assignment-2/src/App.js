import './App.css';
import './Styles/AnimatedStarting.css'
import './Styles/FoodNBeverages.css'
//import './Styles/CardTemplate.css'
import React from 'react';
import AnimatedStarting from './Components/AnimatedStarting';
import ItemSection from './Sections/FoodNBeverages';


function App() {
  return (
    <>
    <div>
      <AnimatedStarting/>
      <ItemSection/>
    </div>

    </>
  );
}

export default App;

