import './App.css';
import './Styles/AnimatedStarting.css'
import './Styles/FoodNBeverages.css'
import './Styles/Hotels.css'
import './Styles/CardTemplate.css'
import './Styles/HotelCard.css'
import React from 'react';
import AnimatedStarting from './Components/AnimatedStarting';
import ItemSection1 from './Sections/FoodNBeverages';
import ItemSection2 from './Sections/Hotels'
import Event from './Components/Event.jsx'
import Footer from './Components/Footer.jsx'
import Video from './Components/video.jsx'
import ItemSection2 from './Sections/Hotels';
import ItemSection3 from './Sections/TourismSpots';
import ItemSection4 from './Sections/AboutUs'


function App() {
  return (
    <>
    <div>
      <AnimatedStarting/>
      <ItemSection4/>
      <ItemSection3/>
      <ItemSection1/>
      <ItemSection2/>
      <Event />
      <Video />
      <Footer />
    </div>

    </>
  );
}

export default App;

