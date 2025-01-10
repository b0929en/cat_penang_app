import React, { useState } from "react";
import "../Styles/AboutUs.css";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      id: 1,
      title: "About Penang",
      image: "/images/penang-city.jpg",
      details:
        `Penang is a lively and colorful state in Malaysia, with its capital, George Town, proudly holding the title of a UNESCO World Heritage Site. 
        This charming place blends Eastern and Western cultures with its rich history and diverse population. 
        The island's strategic location along the Strait of Malacca has made it a bustling trading hub, attracting people from all over the world. 
        `,
    },
    {
      id: 2,
      title: "History",
      image: "/images/history.jpg",
      details:
        `Penang was part of the Malay Sultanate of Kedah until 1786, when Captain Francis Light of the 
        British East India Company established a fort in George Town. 
        It became one of the three British Straits Settlements, along with Malacca and Singapore. 
        The name "Penang" comes from the Malay word "Pinang," meaning betel nut tree.`,
    },
    {
      id: 3,
      title: "Pearl of the Orient",
      image: "/images/special-penang.jpg",
      details:
        `Penang is renowned for its rich cultural heritage, delicious street food, 
        and beautiful beaches like Batu Ferringhi. George Town's vibrant street art and numerous cultural festivals add to its charm. 
        With its blend of cultural sights, natural beauty, 
        and mouthwatering cuisine, Penang is a must-visit destination for any traveler.`,
    },
  ];

  const setActiveSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider" id="AboutUs">
      <div className="about-list">
        {contents.map((item, index) => (
          <div
            key={item.id}
            className={`content-item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </div>
          </div>
        ))}

          <button className="prev nav-btn"
            onClick={() =>
              setActiveSlide((currentIndex - 1 + contents.length) % contents.length)
            }
          >
            <i class='bx bx-chevron-left'></i>
          </button>

          <button className="next nav-btn"
            onClick={() => setActiveSlide((currentIndex + 1) % contents.length)}
          >
            <i class='bx bx-chevron-right'></i>
          </button>

      </div>
    </div>
  );
};

export default AboutUs;
