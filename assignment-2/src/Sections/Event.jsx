import React, { useState, useRef } from "react";
import "../Styles/Event.css";
import Carousel from "../Components/Carousel.jsx"

const Event = () => {
  const items = [
    {
      "id": 1,
      "title": "Island & Beaches",
      "image": "/images/island-beaches.jpg",
      "description": "Discover the serene beaches and crystal-clear waters of Penang.",
      "details": "Indulge in tropical paradise with activities like snorkeling, diving, and sunbathing. Must-visit spots in Penang include Batu Ferringhi Beach, Balik Pulau, and Teluk Bahang."
    },
    {
      "id": 2,
      "title": "Culture & Heritage",
      "image": "/images/culture-heritage.jpg",
      "description": "Uncover the rich history and vibrant culture of Penang.",
      "details": "Explore the historical landmarks, museums, and cultural villages that showcase Penang's heritage. Key highlights include George Town, Khoo Kongsi, and the Pinang Peranakan Mansion."
    },
    {
      "id": 3,
      "title": "Family Fun",
      "image": "/images/family-fun.png",
      "description": "Enjoy family-friendly adventures in Penang.",
      "details": "Penang is perfect for family fun with activities such as Escape Theme Park, Penang Hill, and the Penang Butterfly Farm, offering something for everyone."
    },
    {
      "id": 4,
      "title": "City Excitement",
      "image": "/images/city-excitement.jpg",
      "description": "Experience the vibrant city life of Penang.",
      "details": "Delve into George Town's urban excitement with its colonial charm, vibrant street art, and local markets. Explore the UNESCO World Heritage Site and iconic attractions like the Penang Peranakan Mansion."
    },
    {
      "id": 5,
      "title": "Shopping",
      "image": "/images/shopping.jpg",
      "description": "Indulge in shopping adventures across Penang.",
      "details": "From lively markets to high-end malls, Penang offers a diverse shopping experience. Popular spots include Gurney Plaza, Penang Street Market, and Queensbay Mall."
    },
    {
      "id": 6,
      "title": "Nature & Adventure",
      "image": "/images/nature-adventure.jpg",
      "description": "Dive into nature and adventure in Penang.",
      "details": "Hike through lush forests, explore hidden trails, or take a scenic ride up Penang Hill. For nature lovers, Penang National Park offers amazing wildlife and coastal beauty."
    },
    {
      "id": 7,
      "title": "Street Arts",
      "image": "/images/street-art.jpg",
      "description": "Discover the colorful street art scene of Penang.",
      "details": "Penang is renowned for its vibrant street art, especially in George Town, where murals and sculptures decorate the streets. Dive into the artistic culture with interactive artworks and cozy cafes."
    }    
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const cardContainerRef = useRef(null);
  const eventRef = useRef(null);

  const scrollUp = () => {
    if (eventRef.current) {
      eventRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (cardContainerRef.current){
      cardContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  /*useEffect(() => {
    if (selectedItem !== null) {
      scrollDown();
    } else {
      scrollUp();
    }
  }, [selectedItem]);*/

  const handleBoxClick = (item) => {
    setSelectedItem((prevItem) => (prevItem?.id === item.id ? null : item)); 
  };

  return (
    <div id="Events" className="things-to-do-section" ref={eventRef}>
      <div className="section-title"><p>Things to Do</p></div>
      <div className="section-desc">
        <p> Indulge in an awe-inspiring adventure of a lifetime. Enjoy fun times
            with your family, explore the wilderness, and taste the mouth-watering
            cuisine of Malaysia.
        </p>
      </div>

      <div className="grid-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`grid-item 
                ${selectedItem?.id === item.id ? "active" : ""}
                ${item.id === 6 ? "item-long" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => {
              handleBoxClick(item); 
              scrollDown(); 
            }}
            
          >
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div ref={cardContainerRef}>
        {selectedItem && (
          <div className="details-box">

            <h3 className="details-title">{selectedItem.title}</h3>
            <p className="details-desc">{selectedItem.details}</p>

            <Carousel selectedItemId={selectedItem?.id} />
            
            <button className="event-nav-btn" 
                    onClick={() => {scrollUp(); setSelectedItem(null)}}
            >
              <i class='bx bx-chevrons-up'></i>
            </button>

          </div>
        )}
        
      </div>
    </div>
  );
};

export default Event;