// ItemSection.js
import React from 'react';
import TourismSpotsCard from '../Components/TourismSpotsCard.jsx';

const tourismspots = [
    {
        title: "Entopia Butterfly Park",
        location: "Teluk Bahang, George Town",
        imageSrc: "../DynamicSources/Entopia.jpg",
        details: "Entopia Penang Butterfly Park is a captivating nature sanctuary home to over 4,000 butterflies from around 150 species, offering a magical escape into a vibrant, fairytale-like environment.",
        rating: 5
    },
    {
        title: "Little India Penang",
        location: "Lebuh Pasar, George Town",
        imageSrc: "../DynamicSources/LittleIndiaPenang.jpg",
        details: "Little India Penang is a vibrant area known for its colorful streets, Indian shops, and delicious cuisine. Visitors can enjoy the lively atmosphere, traditional music, and a variety of spices and textiles.",
        rating: 3
    },
    {
        title: "Sleeping Buddha Temple",
        location: "Lorong Burma, Pulau Tikus",
        imageSrc: "../DynamicSources/SleepingBuddhaTemple.jpg",
        details: "The Sleeping Buddha Temple showcases a magnificent 33-meter gold-plated reclining Buddha, symbolizing peace and detachment, with niches behind it holding devotees' ashes.",
        rating: 4
    },
    {
        title: "Thai Pak Koong Temple",
        location: "Tanjung Tokong, Tanjung Bungah",
        imageSrc: "../DynamicSources/ThaiPakKoongTemple.jpg",
        details: "Thai Pak Koong Temple offers a tranquil atmosphere with beautiful architecture and serene surroundings. It is one of the oldest Tua Pek Kong temples in Penang",
        rating: 4
    },
    {
        title: "3D Trick Art Museum",
        location: "Lebuh Penang, George Town",
        imageSrc: "../DynamicSources/Penang3dTrickArtMuseum.jpg",
        details: "Penang 3D Trick Art Museum offers a fun experience for photography lovers, featuring interactive structures that create optical illusions, allowing visitors to take creative photos that trick the eye.",
        rating: 4
    },
    {
        title: "Penang Floating Mosque",
        location: "Jln Batu Ferringhi, Tanjung Bungah",
        imageSrc: "../DynamicSources/PenangFloatingMosque.jpg",
        details: "Penang Floating Mosque is built on stilts, appears to float at high tide. It features a blend of Middle Eastern and local architecture, with a seven-storey minaret and space for 1,500 worshippers.",
        rating: 4
    },
    {
        title: "Saanen Dairy Goat Farm",
        location: "Sungai Pinang, Balik Pulau",
        imageSrc: "../DynamicSources/SaanenDairyGoatFarm.jpg",
        details: "Saanen Dairy Goat Farm features over 10 types of animals and offers a range of homemade dairy products like goat's milk, yogurt, kefir, and ice cream. Visitors can enjoy guided tours and explore the farm.",
        rating: 4
    },
    {
        title: "Escape Theme Park",
        location: "Jalan Teluk Bahang, Tanjung Bungah",
        imageSrc: "../DynamicSources/EscapeThemePark.jpg",
        details: "Escape Theme Park features thrilling adventures, including the world's longest zip coaster, bungee jumping, flying fox, rock climbing, and suspension bridge crossings, all set in a natural environment that enhances the experience.",
        rating: 5
    },
    {
        title: "Penang Hill",
        location: "Bukit Bendera, Georgetown",
        imageSrc: "../DynamicSources/PenangHill.jpg",
        details: "Penang Hill is a cluster of mountain peaks offering stunning views of the jungle, city, and coastline. It is known for its cool air and the famous funicular train ride which is the longest and steepest track in Asia.",
        rating: 5
    },
    {
        title: "Pinang Peranakan Mansion",
        location: "Church St, Bukit Mertajam",
        imageSrc: "../DynamicSources/PinangPeranakanMansion.jpg",
        details: "Pinang Peranakan Mansion is a museum showcasing the history of the Peranakan people, also known as Straits Chinese, who blend Chinese and Malay cultures. It features age-old artifacts and exhibits that illustrate their rich heritage.",
        rating: 5
    },
    {
        title: "Chew Jetty",
        location: "Pengkalan Weld, George Town",
        imageSrc: "../DynamicSources/ChewJetty.jpg",
        details: "Chew Jetty in Penang is a 19th-century waterfront settlement with stilt houses built over water, offering a unique glimpse into this floating village with wooden walkways, shops, and rich Chinese heritage.",
        rating: 3
    },
    {
        title: "Penang National Park",
        location: "Jalan Hassan Abas, Tanjung Bungah",
        imageSrc: "../DynamicSources/PenangNationalPark.jpg",
        details: "Penang National Park offers scenic trails leading to serene beaches like Pantai Kerachut, where you can enjoy sunbathing, beachside swings, and the chance to spot turtles in their natural habitat.",
        rating: 5
    },
    {
        title: "Strait Quay",
        location: "Jln Seri Tanjung Png, George Town",
        imageSrc: "../DynamicSources/StraitQuay.jpg",
        details: "Straits Quay is Penang's first seafront marina where it featuring over 100 shops with stunning ocean views. Key attractions include the Royal Selangor Visitor Centre and penangpac, Penang's performing arts centre.",
        rating: 5
    },
    {
        title: "Gurney Drive",
        location: "Gurney Dr, George Town",
        imageSrc: "../DynamicSources/GurneyDrive.jpg",
        details: "Gurney Drive is famous for its vibrant hawker centre, offering a variety of local street food. It also features a lovely seaside promenade where people can take a leisurely walk along the beachside, enjoying the sea breeze and scenic views.",
        rating: 5
    },
    {
        title: "The Top",
        location: "Jalan Penang, George Town",
        imageSrc: "../DynamicSources/TheTop.jpg",
        details: "The Top Komtar Penang is a thrilling entertainment hub with attractions like the Rainbow Skywalk, Magic Mirror Maze, and 7D Discovery Motion Theatre.",
        rating: 5
    },
    {
        title: "Batu Ferringhi Beach",
        location: "Batu Ferringhi, George Town",
        imageSrc: "../DynamicSources/BatuFerringhiBeach.jpg",
        details: "Batu Ferringhi is a vibrant beach destination famous for its golden sands, thrilling water sports like jet skiing and parasailing and scenic seaside charm.",
        rating: 5
    },
    {
        title: "Kek Lok Si",
        location: "Jalan Balik Pulau, Air Itam",
        imageSrc: "../DynamicSources/KekLokSi.jpg",
        details: "Kek Lok Si is a magnificent Buddhist temple known for its striking architecture, a towering Buddha statue, and serene gardens, making it a spiritual and scenic haven.",
        rating: 5
    },
    {
        title: "Penang Street Art",
        location: "Beach St, George Town",
        imageSrc: "../DynamicSources/PenangStreetArt.jpg",
        details: "Penang Street Art is renowned for its amazing murals that vividly depict the city's rich history and culture. These vibrant artworks have transformed the streets into an open-air gallery.",
        rating: 3
    },
    {
        title: "Hin Bus Depot",
        location: "Jln Gurdwara, George Town",
        imageSrc: "../DynamicSources/HinBusDepot.jpg",
        details: "Hin Bus Depot is a dynamic creative hub where it offers a gallery, arts and event spaces, and creative business outlets. It serves as a platform for artistic expression while promoting sustainability and community engagement.",
        rating: 4
    },
    {
        title: "Penang Snake Temple",
        location: "Bandar Bayan Baru, George Town",
        imageSrc: "../DynamicSources/PenangSnakeTemple.jpg",
        details: "Penang Snake Temple is a unique sanctuary for snakes, they believed to be protected by the spirit of the healer Chor Soo Kong. The temple offers visitors a chance to see snakes resting comfortably in their natural home.",
        rating: 4
    },
];

const ItemSection = () => {
  return (
    <div id='TourismSpots' className='TourismSpotsSection '>
        <div id='MobileView-BypassScrolling' className='p-10' style={{ height: '10vh' }}></div>
            <div className='section-title'><p>Tourism Spots</p></div>
            <div className='section-desc'><p>Uncover the best tourism spots in Penang, where rich history, stunning landscapes, and vibrant culture come together in perfect harmony.</p></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center place-items-center px-4 sm:px-10 lg:px-20">
                    {tourismspots.map((spots, index) => (
                        <TourismSpotsCard
                            key={index}
                            title={spots.title}
                            location={spots.location}
                            imageSrc={spots.imageSrc}
                            details={spots.details}
                            rating={spots.rating}
                        />
                    ))}
                </div>
            <div style={{ height: '20vh' }}></div>
    </div>
  );
};

export default ItemSection;
