// ItemSection.js
import React from 'react';
import Card from '../Components/CardTemplate.jsx';

const items = [
    {
        title: "Teochew Chendul",
        location: "Lebuh Keng Kwee, George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_Chendol.jpg",
        details: "Don’t worry about not finding the small lane where this famous Penang Teochew Cendol stall is located. Spot the long queue off Jalan Penang and you are at the right place. Cool yourself down after a walk round George Town with a bowl of Penang cendol, a local dessert with a coconut milk and gula Melaka (palm sugar) base, topped with red beans, pandan flavoured noodles and shaved ice.",
        rating: 5
    },
    {
        title: "Nasi Kandar",
        location: "Lebuh Campbell, George Town",
        imageSrc: "../DynamicSources/NasiKandar.jpeg",
        details: "The Indians, whether Muslim or Hindu faith, had given Penang its most famous and sought-after cuisine – the nasi kandar. People have been known to travel from all over just to score a plate of rice utterly drenched in at least two types of lively-flavoured curries accompanied by fried chicken, fish, mutton or seafood and a myriad of vegetables. What started as peddling rice and curries, hand-carried in pots to port workers in Penang, nasi kandar has certainly come a long way since then. It’s no surprise since the Indians came from a land of spices from which they expertly grind into various curry pastes that produce robust and colourful curries and marinade.",
        rating: 3
    },
    {
        title: "Hokkien Mee",
        location: "Beach Street George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_HokkienMee.jpg",
        details: "The Penang Hokkien Mee is made delicious by its rich prawn and pork soup base.  It’s normally eaten with yellow noodles and rice noodles, however occasionally, Penangites opt to have it with instant noodles. Penang Hokkien Mee is always garnished with fried shallots and special spicy prawns. It’s available in most coffee shops and street food stalls in Penang.",
        rating: 4
    },
    {
        title: "Pasembur",
        location: "Padang Kota Lama, George Town",
        imageSrc: "../DynamicSources/Hussain-Pasembur-ames_68-768x768.jpg",
        details: "Pasembur is a type of Malaysian salad consisting of shredded cucumber, potatoes, beancurd, turnip, bean sprouts, prawn fritters, fried squid and some other ingredients served with a sweet and spicy nut sauce. ",
        rating: 3
    },
    {
        title: "Kway Chap",
        location: "Lebuh Kimberley, George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_KueyChiap.jpg",
        details: "Kway chap is a braised duck noodle with duck meat, skin, intestine, coagulated blood and braised duck egg in a herbal broth unique to Penangites.",
        rating: 4
    },
    {
        title: "Rojak",
        location: "Gat Lebuh Cecil, George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_Rojak.jpg",
        details: "Penang Rojak can count as a healthy dessert option in Penang. Loaded with more than your 5-a-day fibre needs, Penang Rojak is made from a variety of fruits and vegetables topped with Penang’s own creation of prawn paste sauce. You can also choose to have it spicy or non-spicy.",
        rating: 5
    },
    {
        title: "Mee Goreng",
        location: "Lorong Bangkok, George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_Mee_Goreng.jpg",
        details: "Indian moist stir-fried yellow egg noodles in special spicy-sweet gravy or blanched noodles in the same gravy. Sometimes you get to try this dish doused with strips of cuttlefish in its special sauce.",
        rating: 4
    },
    {
        title: "White Curry Mee",
        location: "Jalan Rangoon, George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_CurryMee.jpg",
        details: "With the Penang White Curry Mee becoming famous worldwide, do not miss trying out the original Penang Curry Mee when you’re in Penang. The Penang Curry Mee comes in a light curry soup base, yellow noodles and rice noodles, garnished with dried tofu, beansprouts and more. It’s available in most coffee shops and street food stalls in Penang. White curry mee is served in a coconut milk-based broth with a bowl of curry paste on the side so that you can adjust the heat to your liking. The curry paste is available for sale by the bottle; it takes two hours to hand-stir the spices with dried shrimps and chillies. Optionally, pair your mee with deboned steamed chicken, spiced loh bak or Teochew guang jiang. The clear broth noodle soup with chicken meatballs is also worth trying.",
        rating: 4
    },
    {
        title: "Nyonya Kuih & Dishes",
        location: "Jalan Masjid, off Lebuh Chulia, George Town",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_NyonyaKuih.jpg",
        details: "Kuih – these are Malay or Nyonya sweets. They are normally rice flour based with coconut milk, steamed or baked and are very colourful. Some contain glutinous rice, palm sugar and additional flavours are derived from natural sources such as pandan leaves. It all depends on which part of China from which they had migrated. The Nyonya flavours are a step up and they are birthed from the collision of Chinese and Malay cultures. The result is a dilution of both original flavours into something quite unique that marries rich robust spices with the faint opulence of slow cooking.",
        rating: 5
    },
    {
        title: "Char Koay Teow",
        location: "Jalan Kampung Baru, Bukit Mertajam",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_CharKueyTeow.jpg",
        details: "To find the famous Penang Char Koay Teow, just follow your nose and you’ll soon be indulging in a plate of the famous Penang fried flat rice noodles. Distinctive and unique in its taste, there is no char koay teow elsewhere that tastes like the char koay teow in Penang. It’s available in most coffee shops and street food stalls in Penang.",
        rating: 5
    },
    {
        title: "Assam Laksa",
        location: "Pekan Ayer Itam, Air Itam",
        imageSrc: "../DynamicSources/Penang_FoodLifestyle_FB_AssamLaksa.jpg",
        details: "Assam Laksa is a dish that serves as an ideal vessel for a well-balanced primary taste sensation. A sip of its rich and tangy fish broth opens the palate to sweet, sour, spicy, and savoury flavours. Other components of Assam Laksa comprise thick, translucent laifun (rice noodles), and garnished with a kaleidoscope of ingredients such as shredded boiled fish, chillies, bunga kantan (torch ginger flower), sliced cucumber, pineapples, raw onion, lettuce, mint leaves, and a wedge of lime.",
        rating: 4
    },
    {
        title: "Yam Rice",
        location: "Jalan Murthy, Bukit Mertajam",
        imageSrc: "../DynamicSources/PenangYamRice.jpeg",
        details: "The yam rice is nicely cooked, with strong shrimp flavour. The pork broth is briny-sweet and the pickled mustard green gives it a tangy depth. The offal is cooked to the perfect texture while the pork balls are peppery and flavoursome.",
        rating: 5
    },
    {
        title: "Cup Rice",
        location: "Jalan Danby, Bukit Mertajam",
        imageSrc: "../DynamicSources/cup-rice-with-extra-serving.jpg",
        details: "This traditional dish is a childhood favourite for many locals and gets its name from the aluminium bowls used to steam rice. It is then turned upside down and topped with a delicious meat sauce.",
        rating: 5
    },
    {
        title: "Oyster omelette",
        location: "Lebuh Carnarvon, George Town",
        imageSrc: "../DynamicSources/Oyster-Omelette.jpeg",
        details: "Oyster Omelette is yet another dish that became popular in Malaysia and Singapore through Teochew influences. There are many styles of cooking Oyster Omelette, but in Penang Seng Thor Coffee Shop, the omelet is usually served soft, thick, and not overcooked. The dish consists of an omelette with a filling primarily composed of small Pacific oysters. Starch (typically sweet potato starch) is mixed into the egg batter, giving the resulting egg wrap a thicker consistency. Pork lard is often used to fry the resulting omelet.",
        rating: 3
    },
    {
        title: "Otak-Otak",
        location: "Lorong Macalister, George Town",
        imageSrc: "../DynamicSources/Otak-otak.jpeg",
        details: "Otak-Otak is a Southeast Asian delicacy, popular in countries like Malaysia, Indonesia, and Singapore. It is a flavorful dish made of fish paste mixed with spices, herbs, and coconut milk, then wrapped in banana leaves and grilled or steamed. Its name, which translates to 'brain' in Malay/Indonesian, refers to its soft, custard-like texture.",
        rating: 4
    },
    {
        title: "Local Breakfast",
        location: "Lebuh Campbell Off Penang Road, George Town",
        imageSrc: "../DynamicSources/LocalBreakfast.jpeg",
        details: "Toh Soon Cafe is well-known for its traditional charcoal-toasted bread, half-boiled eggs, and classic kopi (coffee). The aroma of freshly brewed coffee and toasted bread draws you in, offering an authentic taste of Malaysian breakfast culture. Expect soft bread slathered with butter and kaya (a sweet coconut jam), paired perfectly with the strong, yet balanced, local coffee. The cafe’s retro charm, with plastic stools and makeshift tables, adds to the experience, offering a glimpse into Penang's old-school cafe culture.",
        rating: 5
    },
    // Add more items as needed
];

const ItemSection = () => {
  return (
    <div id='Food&Beverages' className='Section'>
        <div id='MobileView-BypassScrolling' style={{ height: '40vh' }}></div>
        <div className='section-title'>Food & Beverages</div>
        <div className='ItemContainer'>
        {items.map((item, index) => (
            <Card
            key={index}
            title={item.title}
            location={item.location}
            imageSrc={item.imageSrc}
            details={item.details}
            rating={item.rating}
            />
        ))}
        </div>
        <div style={{ height: '40vh' }}></div>
    </div>
  );
};

export default ItemSection;
