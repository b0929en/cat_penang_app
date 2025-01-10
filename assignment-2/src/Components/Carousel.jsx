import React, { useState } from "react";
import "../Styles/Carousel.css"

const details_item = {
  1: [
    {
      id: "c1",
      title: "Batu Feringghi Beach",
      description: "Relax and enjoy breathtaking sunsets.",
      icon: "1",
      backgroundImage: "./details_card/beach1.jpg",
    },
    {
      id: "c2",
      title: "Kerachut Beach",
      description: "Explore the pristine beauty of Penang National Park.",
      icon: "2",
      backgroundImage: "./details_card/beach2.jpg",
    },
    {
      id: "c3",
      title: "Teluk Bahang Beach",
      description: "Explore marine life in Teluk Bahang's clear waters.",
      icon: "3",
      backgroundImage: "./details_card/beach3.jpg",
    },
    {
      id: "c4",
      title: "Pasir Panjang Beach",
      description: "Discover the natural charm of Pasir Panjang Beach.",
      icon: "4",
      backgroundImage: "./details_card/beach4.jpg",
    },
  ],
  2: [
    {
      id: "c1",
      title: "Pinang Peranakan Mansion",
      description: "Step into the lavish lifestyle of the Peranakans at this stunning museum.",
      icon: "1",
      backgroundImage: "./details_card/culture1.jpg",
    },
    {
      id: "c2",
      title: "Georgetown Festival",
      description: "Celebrate arts and culture at Penang's iconic George Town Festival.",
      icon: "2",
      backgroundImage: "./details_card/culture2.jpg",
    },
    {
      id: "c3",
      title: "Kek Lok Si Temple",
      description: "Explore Southeast Asia's largest Buddhist temple, a cultural treasure.",
      icon: "3",
      backgroundImage: "./details_card/culture3.jpg",
    },
    {
      id: "c4",
      title: "Kapitan Keling Mosque",
      description: "Admire the grandeur of Penang's oldest mosque.",
      icon: "4",
      backgroundImage: "./details_card/culture4.jpeg",
    },
  ],
  3: [
    {
      "id": "c1",
      "title": "Entopia Butterfly Farm",
      "description": "Explore the magical world of butterflies and insects at one of the largest butterfly farms in Malaysia.",
      "icon": "1",
      "backgroundImage": "./details_card/family1.jpg"
    },
    {
      "id": "c2",
      "title": "Penang National Park",
      "description": "Discover nature trails, pristine beaches, and a variety of wildlife in this tropical haven.",
      "icon": "2",
      "backgroundImage": "./details_card/family2.jpg"
    },
    {
      "id": "c3",
      "title": "Penang 3D Trick Art Museum",
      "description": "Have fun with optical illusions and take creative photos with family-friendly 3D art exhibits.",
      "icon": "3",
      "backgroundImage": "./details_card/family3.jpg"
    },
    {
      "id": "c4",
      "title": "Escape Theme Park Penang",
      "description": "An adventure-packed theme park with activities like zip-lining, obstacle courses, and water sports for families.",
      "icon": "4",
      "backgroundImage": "./details_card/family4.jpg"
    },
  ],
  4: [
    {
      "id": "c1",
      "title": "St. George's Church",
      "description": "Visit the St. George's Church, one of the oldest Anglican churches in Southeast Asia.",
      "icon": "1",
      "backgroundImage": "./details_card/city1.jpg"
    },
    {
      "id": "c2",
      "title": "Wisma Building",
      "description": "Admire the modern architecture of Wisma Building, a prominent landmark in Penang.",
      "icon": "2",
      "backgroundImage": "./details_card/city2.jpg"
    },
    {
      "id": "c3",
      "title": "Fort Cornwallis",
      "description": "Explore the historic Fort Cornwallis, a military stronghold dating back to the late 18th century.",
      "icon": "3",
      "backgroundImage": "./details_card/city3.jpg"
    },
    {
      "id": "c4",
      "title": "KOMTAR tower",
      "description": "Visit the tallest building in Penang, KOMTAR, for stunning views of the city.",
      "icon": "4",
      "backgroundImage": "./details_card/city4.jpg"
    }
  ],
  5: [
    {
      "id": "c1",
      "title": "Gurney Plaza",
      "description": "Shop for high-end brands and dine at luxury restaurants in one of Penang’s premier shopping malls.",
      "icon": "1",
      "backgroundImage": "./details_card/shopping1.jpg"
    },
    {
      "id": "c2",
      "title": "Queensbay Mall",
      "description": "Find a variety of shops and entertainment options in this bustling shopping center overlooking the sea.",
      "icon": "2",
      "backgroundImage": "./details_card/shopping2.jpg"
    },
    {
      "id": "c3",
      "title": "Chowrasta Market",
      "description": "Explore a vibrant market offering fresh produce, and traditional goods in the heart of George Town.",
      "icon": "3",
      "backgroundImage": "./details_card/shopping3.jpg"
    },
    {
      "id": "c4",
      "title": "Penang Street Markets",
      "description": "Experience Penang’s famous street markets where you can haggle for unique souvenirs and street food.",
      "icon": "4",
      "backgroundImage": "./details_card/shopping4.jpg"
    },
  ],
  6: [
    {
      "id": "c1",
      "title": "Penang Hill",
      "description": "Take a scenic funicular ride up Penang Hill, where you can enjoy panoramic views, cooler air, and lush greenery.",
      "icon": "1",
      "backgroundImage": "./details_card/nature1.jpg"
    },
    {
      "id": "c2",
      "title": "Botanical Gardens",
      "description": "Explore the tropical plants, trees, and flowers in this peaceful garden, perfect for a family stroll or picnic.",
      "icon": "2",
      "backgroundImage": "./details_card/nature2.png"
    },
    {
      "id": "c3",
      "title": "Kerachut Beach and Turtle Sanctuary",
      "description": "Visit the turtle sanctuary and enjoy the tranquil beauty of Kerachut Beach.",
      "icon": "3",
      "backgroundImage": "./details_card/nature3.jpg"
    },
    {
      "id": "c4",
      "title": "Tropical Spice Garden",
      "description": "Walk through lush gardens filled with aromatic spices, herbs, and tropical plants in a serene setting.",
      "icon": "4",
      "backgroundImage": "./details_card/nature4.jpg"
    },
  ],
  7: [
    {
      "id": "c1",
      "title": "Street Art of George Town",
      "description": "Explore the world-renowned murals and street art that reflect Penang's culture and history.",
      "icon": "1",
      "backgroundImage": "./details_card/street_arts1.jpg"
    },
    {
      "id": "c2",
      "title": "Clan Jetties",
      "description": "Admire the unique wooden houses on stilts along the waterfront, some of which feature vibrant street art.",
      "icon": "2",
      "backgroundImage": "./details_card/street_arts2.jpg"
    },
    {
      "id": "c3",
      "title": "Penang Street Art Trail",
      "description": "Take a guided tour through George Town to discover hidden art pieces that tell stories of the local heritage.",
      "icon": "3",
      "backgroundImage": "./details_card/street_arts3.jpg"
    },
    {
      "id": "c4",
      "title": "Hin Bus Depot",
      "description": "Visit the art gallery and creative space where murals, and exhibitions capture the spirit of local artists.",
      "icon": "4",
      "backgroundImage": "./details_card/street_arts4.jpg"
    },
  ]
};

const Carousel = ({selectedItemId}) => {

  const data = details_item[selectedItemId] || [];

  const [selectedSlide, setSelectedSlide] = useState("c1");

  if(data.length === 0){
    return null;
  }

  return (
    <div className="crs-wrapper">
      <div className="crs-container">
        {data.map((slide) => (
          <React.Fragment key={slide.id}>
            <input
              type="radio"
              id={slide.id}
              name="slide"
              checked={selectedSlide === slide.id}
              onChange={() => setSelectedSlide(slide.id)}
            />
            <label
              htmlFor={slide.id}
              className="crs-card"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="crs-row">
                <div className="crs-icon">{slide.icon}</div>
                <div className="crs-description">
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Carousel;