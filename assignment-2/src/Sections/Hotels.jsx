// ItemSection.js
import React from 'react';
import HotelCard from '../Components/HotelCard.jsx';


const hotels = [
    {
        title: "Eastern & Oriental Hotel",
        location: "10 Lebuh Farquhar, George Town",
        imageSrc: "../DynamicSources/EandOHotel.jpg",
        details: "If you're looking for timeless luxury, the Eastern & Oriental Hotel is the perfect choice. This colonial-era gem blends old-world charm with modern comforts. You'll love the spacious suites, exquisite dining options, and stunning views of the Andaman Sea.",
        rating: "5 ☆"
    },
    {
        title: "The Prestige Hotel",
        location: "8 Gat Lebuh Gereja, George Town",
        imageSrc: "../DynamicSources/ThePrestigeHotel.jpg",
        details: "Step into elegance at The Prestige Hotel, a unique stay inspired by Victorian charm with a modern twist. Located near George Town's attractions, it offers beautifully designed rooms, a rooftop pool, and top-notch service. Ideal for those who love sophistication and convenience.",
        rating: "4 ☆"
    },
    {
        title: "G Hotel Gurney",
        location: "168A, Gurney Dr, George Town",
        imageSrc: "../DynamicSources/GHotelGurney.jpg",
        details: "Situated along the bustling Gurney Drive, G Hotel Gurney is the epitome of contemporary style. From chic interiors to outstanding amenities, this hotel is perfect for travelers who want to explore the nearby beach, shopping malls, and local street food scene.",
        rating: "4 ☆"
    },
    {
        title: "Lone Pine Hotel",
        location: "97 Batu Ferringhi, Batu Ferringhi",
        imageSrc: "../DynamicSources/LonePineHotel.jpg",
        details: "For a serene beachside retreat, Lone Pine Hotel is unbeatable. Nestled along Batu Ferringhi, it offers peaceful surroundings, spacious rooms, and a relaxing vibe. A perfect getaway for couples or anyone seeking tranquility by the sea.",
        rating: "4 ☆"
    },
    {
        title: "Hotel Penaga",
        location: "Corner of Hutton Lane & Transfer Road, George Town",
        imageSrc: "../DynamicSources/HotelPenaga.jpg",
        details: "History buffs and eco-conscious travelers will love Hotel Penaga. This boutique hotel is full of character, featuring antique-filled rooms and sustainable practices. Its location in the UNESCO heritage area makes exploring George Town's culture a breeze.",
        rating: "4 ☆"
    },
    {
        title: "Shangri-La's Rasa Sayang Resort & Spa",
        location: "Batu Ferringhi Beach, Batu Ferringhi",
        imageSrc: "../DynamicSources/RasaSayangResort.jpg",
        details: "For ultimate luxury and relaxation, Shangri-La's Rasa Sayang Resort is a dream come true. Set amidst lush gardens on Batu Ferringhi Beach, this resort offers world-class dining, spa treatments, and plenty of activities for an unforgettable stay.",
        rating: "5 ☆"
    },
    {
        title: "Cheong Fatt Tze - The Blue Mansion",
        location: "14 Lebuh Leith, George Town",
        imageSrc: "../DynamicSources/BlueMansion.jpg",
        details: "Stay in a piece of Penang's history at The Blue Mansion. This iconic heritage building combines boutique accommodation with fascinating guided tours of its storied past. A truly unique experience for culture enthusiasts.",
        rating: "5 ☆"
    },
    {
        title: "JEN Penang Georgetown by Shangri-La",
        location: "Magazine Road, George Town",
        imageSrc: "../DynamicSources/JenHotelPenang.jpg",
        details: "If convenience and comfort are what you seek, JEN Penang is a fantastic choice. Located in the heart of George Town, this vibrant hotel offers modern amenities, cozy rooms, and easy access to shopping centers and attractions.",
        rating: "5 ☆"
    },
    {
        title: "The Edison George Town",
        location: "15 Lebuh Leith, George Town",
        imageSrc: "../DynamicSources/TheEdison.jpg",
        details: "Experience an intimate and luxurious stay at The Edison George Town. This beautifully restored colonial mansion offers personalized service, elegant interiors, and a quiet atmosphere. Perfect for travelers seeking sophistication and serenity.",
        rating: "5 ☆ "
    },
    {
        title: "Hard Rock Hotel Penang",
        location: "Batu Ferringhi Beach, Batu Ferringhi",
        imageSrc: "../DynamicSources/HardRockPenang.jpg",
        details: "For fun-filled, family-friendly excitement, Hard Rock Hotel Penang is the place to be. With its vibrant music-themed design, great entertainment, and beachfront location, it's perfect for those who want to combine relaxation with a lively atmosphere.",
        rating: "4 ☆"
    }
];

const ItemSection = () => {
  return (
    <div id='Hotels' className='HotelSection'>
    <div id='MobileView-BypassScrolling' style={{ height: '15vh' }}></div>
    <div className='section-title'>Hotels</div>
    <div className='HotelItemContainer'>
    {hotels.map((hotel, index) => (
        <HotelCard
        key={index}
        title={hotel.title} 
        location={hotel.location}
        imageSrc={hotel.imageSrc}
        details={hotel.details} 
        rating={hotel.rating}
      />
      
    
    ))}
    </div>
    <div style={{ height: '15vh' }}></div>
</div>

  );
};

export default ItemSection;