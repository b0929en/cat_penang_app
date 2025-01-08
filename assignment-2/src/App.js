import './App.css';
import './Styles/AnimatedStarting.css'
import './Styles/FoodNBeverages.css'
//import './Styles/CardTemplate.css'
import React from 'react';
import AnimatedStarting from './Components/AnimatedStarting';
import ItemSection from './Sections/FoodNBeverages';
import Event from './Components/Event.jsx'
import Footer from './Components/Footer.jsx'
import Video from './Components/video.jsx'

function App() {
  return (
    <>
    <div>
      <AnimatedStarting/>
      <ItemSection/>
      <Event />
      <Video />
      <Footer />
    </div>

    </>
  );
}

export default App;

