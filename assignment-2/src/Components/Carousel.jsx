import React, { useState } from "react";
import "../Styles/Carousel.css";

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
      id: "c1",
      title: "Winterseeeee",
      description: "Winter has so much to offer - creative activities",
      icon: "1",
      backgroundImage: "./images/hero_img1.jpeg",
    },
    {
      id: "c2",
      title: "Digital Technology",
      description: "Gets better every day - stay tuned",
      icon: "2",
      backgroundImage: "./images/hero_img2.jpeg",
    },
    {
      id: "c3",
      title: "Globalization",
      description: "Help people all over the world",
      icon: "3",
      backgroundImage: "./images/hero_img3.jpeg",
    },
    {
      id: "c4",
      title: "New Technologies",
      description: "Space engineering becomes more and more advanced",
      icon: "4",
      backgroundImage: "./images/hero_img1.jpeg",
    },
  ],
  4: [
    {
      id: "c1",
      title: "Winter",
      description: "Winter has so much to offer - creative activities",
      icon: "1",
      backgroundImage: "./images/hero_img1.jpeg",
    },
    {
      id: "c2",
      title: "Digital Technology",
      description: "Gets better every day - stay tuned",
      icon: "2",
      backgroundImage: "./images/hero_img2.jpeg",
    },
    {
      id: "c3",
      title: "Globalization",
      description: "Help people all over the world",
      icon: "3",
      backgroundImage: "./images/hero_img3.jpeg",
    },
    {
      id: "c4",
      title: "New Technologies",
      description: "Space engineering becomes more and more advanced",
      icon: "4",
      backgroundImage: "./images/hero_img1.jpeg",
    },
  ],
  5: [
    {
      id: "c1",
      title: "Winter",
      description: "Winter has so much to offer - creative activities",
      icon: "1",
      backgroundImage: "./images/hero_img1.jpeg",
    },
    {
      id: "c2",
      title: "Digital Technology",
      description: "Gets better every day - stay tuned",
      icon: "2",
      backgroundImage: "./images/hero_img2.jpeg",
    },
    {
      id: "c3",
      title: "Globalization",
      description: "Help people all over the world",
      icon: "3",
      backgroundImage: "./images/hero_img3.jpeg",
    },
    {
      id: "c4",
      title: "New Technologies",
      description: "Space engineering becomes more and more advanced",
      icon: "4",
      backgroundImage: "./images/hero_img1.jpeg",
    },
  ],
  6: [
    {
      id: "c1",
      title: "Winter",
      description: "Winter has so much to offer - creative activities",
      icon: "1",
      backgroundImage: "./images/hero_img1.jpeg",
    },
    {
      id: "c2",
      title: "Digital Technology",
      description: "Gets better every day - stay tuned",
      icon: "2",
      backgroundImage: "./images/hero_img2.jpeg",
    },
    {
      id: "c3",
      title: "Globalization",
      description: "Help people all over the world",
      icon: "3",
      backgroundImage: "./images/hero_img3.jpeg",
    },
    {
      id: "c4",
      title: "New Technologies",
      description: "Space engineering becomes more and more advanced",
      icon: "4",
      backgroundImage: "./images/hero_img1.jpeg",
    },
  ],
  7: [
    {
      id: "c1",
      title: "Winter",
      description: "Winter has so much to offer - creative activities",
      icon: "1",
      backgroundImage: "./images/hero_img1.jpeg",
    },
    {
      id: "c2",
      title: "Digital Technology",
      description: "Gets better every day - stay tuned",
      icon: "2",
      backgroundImage: "./images/hero_img2.jpeg",
    },
    {
      id: "c3",
      title: "Globalization",
      description: "Help people all over the world",
      icon: "3",
      backgroundImage: "./images/hero_img3.jpeg",
    },
    {
      id: "c4",
      title: "New Technologies",
      description: "Space engineering becomes more and more advanced",
      icon: "4",
      backgroundImage: "./images/hero_img1.jpeg",
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
    <div className="wrapper">
      <div className="container">
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
              className="card"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="row">
                <div className="icon">{slide.icon}</div>
                <div className="description">
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