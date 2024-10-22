import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel' // added carousel library for adding carausels
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Dummy data for individual travel stories
// Dummy data for individual travel stories
const travelStories = [
    {
      title: "Affordable places in Europe",
      images: [
        "https://img.freepik.com/free-photo/magnificent-old-castle-captured-by-bridge-beautiful-river-cloudy-day_181624-29120.jpg?semt=ais_hybrid-rr-similar",
        "https://img.freepik.com/premium-photo/blonde-woman-tourist-smile-caucasian-vacation-tour-city-center-europe-tourism-background_100800-26644.jpg?semt=ais_hybrid-rr-similar",
        "https://img.freepik.com/free-photo/majestic-french-culture-dusk-generated-by-ai_188544-34857.jpg?semt=ais_hybrid-rr-similar",
      ],
      content:
        "Explore Europe's hidden gems without breaking the bank! From charming cities to breathtaking landscapes, here's your guide to affordable yet unforgettable experiences in Europe.",
      date: "April 12, 2024",
      experience: "During my trip to Europe, I found myself captivated by the charm of small towns like Bruges and Siena. The local cafes, cobblestone streets, and vibrant culture were unforgettable. I loved the fact that every city had its unique character, but one thing that stood out was how budget-friendly the experience was. From hostels to public transport, it was a backpacker's dream come true.",
      anecdotes: "One hilarious moment was when I tried speaking French in a small café in Paris, but ended up ordering something completely different than I intended. The waiter and I had a good laugh, and despite the language barrier, I felt more connected to the culture. It’s small, funny moments like these that make travel so rewarding.",
      avoid: "Be cautious of tourist traps near popular attractions. For example, in Rome, avoid the cafes and restaurants right by the Colosseum; they tend to overcharge tourists for very average food. Instead, explore the backstreets for more authentic and reasonably priced meals.",
    },
    {
      title: "Exploring street food of India",
      images: [
        "https://img.freepik.com/free-photo/close-up-ancient-greece-ingredients_23-2151026690.jpg?semt=ais_hybrid",
        "https://img.freepik.com/premium-photo/cooking-street-food_433905-30220.jpg?semt=ais_hybrid",
        "https://img.freepik.com/free-photo/top-view-delicious-corn-dish-with-vegetables-table_23-2148042491.jpg?semt=ais_hybrid",
      ],
      content:
        "Embark on a culinary journey through India's vibrant street markets. Taste the rich flavors and unique spices that define the country's diverse food scene.",
      date: "June 28, 2024",
      experience: "Eating street food in India was an adventure like no other. The burst of flavors, from spicy chaat to sweet jalebis, was simply unforgettable. I found that each region had its own take on traditional dishes, making every meal a new experience. One of my favorite moments was having fresh pani puri from a vendor in Delhi – it was the perfect blend of tangy and spicy!",
      anecdotes: "Once, I ventured into the busy lanes of Kolkata to try their famous kathi rolls. As I was waiting, the vendor playfully warned me about the spice level, and I thought I could handle it. Big mistake! I ended up drinking two lassis to cool my mouth down, much to the amusement of the locals.",
      avoid: "While street food is a must, make sure to stick to vendors with clean setups to avoid any stomach issues. I learned this the hard way after trying some food from a lesser-known stall in Varanasi. Stick to busy, popular stalls as a general rule!",
    },
    {
      title: "Craft Your Perfect Journey",
      // images: [
      //   "src/assets/travel-1.jpg",
      //   "src/assets/travel-2.jpg",
      //   "src/assets/travel-3.jpg",
      // ],
      content:
        "Learn how to craft the perfect travel itinerary. From choosing the right destinations to managing your budget, make your dream trip come true with these tips.",
      date: "September 15, 2024",
      experience: "Planning my dream trip was both challenging and incredibly rewarding. I spent hours researching destinations, finding hidden gems that weren’t overly crowded, and planning a budget that allowed me to enjoy both luxury and adventure. My favorite part was finding the perfect balance between relaxation and exploration. It was a trip tailored just for me.",
      anecdotes: "One of the most memorable moments during this trip was when I got lost while exploring a tiny village in Spain. Instead of being stressful, it became an impromptu adventure, leading me to a beautiful hidden beach that wasn’t even on the map. It reminded me that sometimes the best experiences happen when things don’t go according to plan.",
      avoid: "Avoid overplanning! While having a general itinerary is great, leave room for spontaneity. Some of my best memories were created when I decided to wander without a plan. Also, try to avoid traveling during peak seasons, as popular spots can get crowded and lose their charm.",
    },
  ];
// Individual Travel Story Page
export default function TravelStory() {
  const { title } = useParams();
  const story = travelStories.find((story) => story.title === title);

  if (!story) return <p>Story not found</p>;


  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-8">
          {story.title}
        </h2>

        {/* Carousel for Travel Images */}
       
      {/* Full-width Carousel */}
      {story.images &&
      <Carousel showThumbs={false} autoPlay infiniteLoop className="mb-12">
        {story.images?.map((image, idx) => (
          <div key={idx}>
            <img src={image} alt={`Slide ${idx}`} className="w-full h-[40rem] object-cover" />
          </div>
        ))}
      </Carousel>
}

{/* Story Content */}
{/* Story Content */}
<div className="bg-gradient-to-b from-white to-gray-100 p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
    Story Details
  </h3>
  
  {/* Story Content */}
  <p className="text-gray-600 leading-relaxed mb-6 text-lg animate-fadeIn">
    {story.content}
  </p>

  {/* Date */}
  <div className="text-gray-500 text-sm mb-6 italic">
    Published on: {story.date}
  </div>
  <hr className="border-t border-gray-300 mb-8" />
  {/* Our Experience Section */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center animate-slideInLeft">
      <span className="mr-3 text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-3-3.87"></path>
          <path d="M20 8a6 6 0 00-9-5.92"></path>
          <path d="M3 21v-2a4 4 0 013-3.87"></path>
          <path d="M3 8a6 6 0 019-5.92"></path>
        </svg>
      </span>
      Our Experience
    </h3>
    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
      {story.experience}
    </p>
  </div>
  <hr className="border-t border-gray-300 mb-8" />
  {/* Funny Anecdotes Section */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center animate-slideInRight">
      <span className="mr-3 text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l3-3 3 3m0 0l3-3 3 3m-6-6v13" />
        </svg>
      </span>
      Funny Anecdotes
    </h3>
    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
      {story.anecdotes}
    </p>
  </div>
  <hr className="border-t border-gray-300 mb-8" />
  {/* Things to Avoid Section */}
  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center animate-slideInUp">
      <span className="mr-3 text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      Things to Avoid
    </h3>
    <p className="text-gray-700 leading-relaxed text-lg">
      {story.avoid}
    </p>
  </div>
</div>
        

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-500">
            ← Back to Travel Stories
          </Link>
        </div>
      </div>
    </div>
  );
}