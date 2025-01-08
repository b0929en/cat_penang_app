import React, { useState, useEffect, useRef } from "react";
import "../Styles/Event.css";

const Event = () => {
  const items = [
    {
      id: 1,
      title: "Island & Beaches",
      image: "./images/island-beaches.jpg",
      description: "Discover pristine beaches and crystal-clear waters.",
      details:
        "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
    },
    {
      id: 2,
      title: "Culture & Heritage",
      image: "/images/culture-heritage.jpg",
      description: "Explore rich history and vibrant culture.",
      details:
        "Visit historical landmarks, museums, and cultural villages to immerse yourself in Malaysia's unique heritage. Highlights include George Town, Malacca, and Sarawak Cultural Village.",
    },
    {
      id: 3,
      title: "Family Fun",
      image: "/images/family-fun.jpg",
      description: "Enjoy fun activities for all ages.",
      details:
        "From theme parks to zoos, Malaysia has plenty of family-friendly attractions like Sunway Lagoon, Legoland, and Zoo Negara.",
    },
    {
      id: 4,
      title: "City Excitement",
      image: "/images/city-excitement.jpg",
      description: "Dive into urban adventures.",
      details:
        "Explore bustling cities like Kuala Lumpur and Johor Bahru. Enjoy shopping, nightlife, and iconic landmarks such as the Petronas Twin Towers.",
    },
    {
      id: 5,
      title: "Shopping",
      image: "/images/shopping.jpg",
      description: "Embark on thrilling adventures.",
      details:
        "Hike through rainforests, climb Mount Kinabalu, or experience white-water rafting. Adventure awaits in Malaysia's national parks and beyond.",
    },
    {
      id: 6,
      title: "Nature & Adventure",
      image: "/images/nature-adventure.jpg",
      description: "Embark on thrilling adventures.",
      details:
        "Hike through rainforests, climb Mount Kinabalu, or experience white-water rafting. Adventure awaits in Malaysia's national parks and beyond.",
    },
    {
      id: 7,
      title: "Street Arts",
      image: "/images/street-art.jpg",
      description: "Relax in luxurious accommodations.",
      details:
        "Choose from beachside resorts, boutique hotels, or eco-lodges for a memorable stay.",
    },
  ];

  const cardItems = {
    1: [
      {
        id: 1,
        title: "Beach 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "Beach 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "Beach 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 4,
        title: "Beach 4",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
    2: [
      {
        id: 1,
        title: "Cultural 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "Cultural 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "Cultural 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 4,
        title: "Cultural 4",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
    3: [
      {
        id: 1,
        title: "Family 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "Family 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "Family 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
    4: [
      {
        id: 1,
        title: "City 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "City 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "City 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 4,
        title: "City 4",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
    5: [
      {
        id: 1,
        title: "Shopping 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "Shopping 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "Shopping 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
    6: [
      {
        id: 1,
        title: "Nature 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "Nature 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "Nature 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 4,
        title: "Nature 4",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
    7: [
      {
        id: 1,
        title: "Art 1",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 2,
        title: "Art 2",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
      {
        id: 3,
        title: "Art 3",
        image: "/images/island-beaches.jpg",
        description: "Discover pristine beaches and crystal-clear waters.",
        details:
          "Experience the best of tropical paradise with activities such as snorkeling, diving, and sunbathing. Popular destinations include Langkawi, Perhentian Islands, and Redang.",
      },
    ],
  };

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

  useEffect(() => {
    if (selectedItem !== null) {
      scrollDown();
    } else {
      scrollUp();
    }
  }, [selectedItem]);

  const handleBoxClick = (item) => {
    setSelectedItem((prevItem) => (prevItem?.id === item.id ? null : item)); 
  };

  return (
    <div className="things-to-do-section" ref={eventRef}>
      <h2 className="section-title">Things to Do</h2>
      <p className="section-desc">
        Indulge in an awe-inspiring adventure of a lifetime. Enjoy fun times
        with your family, explore the wilderness, and taste the mouth-watering
        cuisine of Malaysia.
      </p>

      <div className="grid-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`grid-item 
                ${selectedItem?.id === item.id ? "active" : ""}
                ${item.id === 6 ? "item-long" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => handleBoxClick(item)}
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

            <div className="details-card-container">
              {cardItems[selectedItem.id]?.map((cardItem) => (
                <div
                  key={cardItem.id}
                  className="details-cardItem"
                >
                  <img className="details-card-img" src={cardItem.image}/>
                  <div className="details-card-info">
                    <h3>{cardItem.title}</h3>
                    <p>{cardItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="event-nav-btn" onClick={scrollUp}>
              <i class='bx bx-chevrons-up'></i>
            </button>

          </div>
        )}


      </div>
    </div>
  );
};

export default Event;
