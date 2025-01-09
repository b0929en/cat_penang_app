import './App.css';
import './Styles/AnimatedStarting.css'
import './Styles/FoodNBeverages.css'
import './Styles/Hotels.css'
import './Styles/CardTemplate.css'
import './Styles/HotelCard.css'
import React from 'react';
import AnimatedStarting from './Components/AnimatedStarting.jsx';
import ItemSection1 from './Sections/FoodNBeverages.jsx';
import ItemSection2 from './Sections/Hotels.jsx';
import ItemSection3 from './Sections/TourismSpots.jsx';
import ItemSection4 from './Sections/AboutUs.jsx';
import ItemSection5 from './Sections/Event.jsx';
import Footer from './Sections/Footer.jsx';
import Video from './Components/video.jsx';



function App() {
  return (
    <>
    <div>
      <AnimatedStarting/>
      <ItemSection4/>
      <ItemSection3/>
      <ItemSection1/>
      <ItemSection2/>
      <ItemSection5/>
      <Video />
      <Footer />
    </div>

    </>
  );
}

export default App;

