// AboutUs.js
import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: 'url("../DynamicSources/BackgroundImage.jpg")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="about-us-container" style={backgroundStyle}>
      {/* About Penang Section */}
      <section className="about-penang">
        <h1><br />About Penang</h1>
        <div className='penang-img flex flex-row justify-center items-center gap-10'>
            <img src="../DynamicSources/PenangFlag.png" className=""  width={120} height={80}/> 
            <img src="../DynamicSources/LambangPenang.png" className=" " width={60} height={80}/> 
        </div>
        <p className='md:text-2xl'><br />Penang is a lively and colorful state in Malaysia, with its capital, George Town, proudly holding the title of a UNESCO World Heritage Site. This charming place blends Eastern and Western cultures with its rich history and diverse population. The island's strategic location along the Strait of Malacca has made it a bustling trading hub, attracting people from all over the world. The people of Penang are known for their warmth and friendliness, always ready to welcome visitors with open arms. Whether you're exploring the historic streets of George Town, relaxing on its beautiful beaches, or savoring its famous street food, Penang offers a delightful and memorable experience for everyone.</p>
      </section>

      {/* History of Penang Section */}
      
        <div className="flex max-md:flex-col flex-row mb-10 gap-5">
          <div className="w-2/4 m-auto">
            <img src="../DynamicSources/HistoryOfPenang.webp" className='object-cover' alt="Historic Penang" /> {/* Replace with an actual image */}
          </div>
          <div className="items-center justify-center flex flex-col gap-14 md:max-w-[50%]">
            <h2 className='font-bold text-4xl justify-center items-center'>History of Penang</h2>
            <p className='md:text-2xl text-center'>Penang was part of the Malay Sultanate of Kedah until 1786, when Captain Francis Light of the British East India Company established a fort in George Town. It became one of the three British Straits Settlements, along with Malacca and Singapore. The name "Penang" comes from the Malay word "Pinang," meaning betel nut tree.</p>
          </div>
        </div>
      

      {/* What's Special About Penang Section */}
      <section className="special-about-penang">
        <h2>What's Special About Penang</h2>
        <p className='md:text-2xl'>Penang is renowned for its rich cultural heritage, delicious street food, and beautiful beaches like Batu Ferringhi. George Town's vibrant street art and numerous cultural festivals add to its charm. With its blend of cultural sights, natural beauty, and mouthwatering cuisine, Penang is a must-visit destination for any traveler.</p>
        <p className="slogan"><br />Welcome to Penang!</p>
      </section>
    </div>
  );
};

export default AboutUs;
