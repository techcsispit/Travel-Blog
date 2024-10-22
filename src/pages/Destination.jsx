import React from 'react';
import { Link } from 'react-router-dom';

function Destination() {
  // Destinations data as an object
  const destinations = {
    "Zurich, Switzerland": {
      images: [
        "../src/assets/z-1.avif",
        "../src/assets/h-1.jpg",
        "../src/assets/z-3.avif"
      ],
      description: "Zurich is the largest city in Switzerland, offering the perfect blend of urban life and scenic Alpine views.",
      location: "Zurich, Switzerland"
    },
    "Paris, France": {
      images: [
        "../src/assets/p-1.jpg",
        "../src/assets/p-3.avif",
        "../src/assets/p-2.avif"
      ],
      description: "Paris, the capital city of France, is known for its rich history, iconic landmarks, art, and cuisine. The 'City of Light' is a cultural and romantic hub.",
      location: "Paris, France"
    },
    "Hawaii, USA": {
      images: [
        "../src/assets/h-1.jpg",
        "../src/assets/h-2.avif",
        "../src/assets/h-3.avif"
      ],
      description: "Hawaii, an archipelago in the Pacific Ocean, is famous for its stunning beaches, lush landscapes, and unique blend of cultures. It’s a paradise for nature lovers and adventurers alike.",
      location: "Hawaii, USA"
    }
  };

// Card component for each destination
const DestinationCard = ({ destination, name }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Display only the first image */}
        <img src={destination.images[0]} alt={name} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600">{destination.description}</p>
        </div>
        <div className="flex justify-end p-4">
          {/* Read More link aligned to the right */}
          <Link to={`/blog/${name}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">Top Travel Destinations</h1>

        {/* Grid Layout for Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {Object.keys(destinations).map((key) => (
            <DestinationCard key={key} name={key} destination={destinations[key]} />
          ))}
        </div>

        {/* Travel Tips Section */}
        <section className="bg-white p-10 rounded-lg shadow-lg mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Travel Tips</h2>
          <ul className="space-y-4">
            <li className="text-gray-700 text-lg">
              ✈️ Book your flights in advance to get the best deals.
            </li>
            <li className="text-gray-700 text-lg">
              💼 Pack light and bring versatile clothing to adjust to various weather conditions.
            </li>
            <li className="text-gray-700 text-lg">
              🌍 Learn a few basic phrases of the local language for better communication.
            </li>
            <li className="text-gray-700 text-lg">
              🏨 Always check online reviews before booking your accommodation.
            </li>
          </ul>
        </section>

        {/* Popular Activities Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Popular Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🏄‍♂️ Surfing</h3>
              <p className="text-gray-600">Hit the waves and enjoy some surfing at beautiful coastal destinations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🎿 Skiing</h3>
              <p className="text-gray-600">Experience skiing in the Alps or other snowy mountain regions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🗺️ City Tours</h3>
              <p className="text-gray-600">Explore the rich culture and history of popular cities around the world.</p>
            </div>
          </div>
        </section>

        {/* Newsletter Sign-up Section */}
        <section className="bg-gradient-to-r from-purple-400 to-purple-600 p-10 rounded-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest travel updates and offers straight to your inbox!</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-lg px-4 py-2 rounded-md text-black"
            />
            <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-bold hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Destination;
