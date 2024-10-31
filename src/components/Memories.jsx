import React, { useState } from 'react';
import {  Globe, Camera, Coffee, Mountain, Sunrise } from 'lucide-react';

const VisitedLocations = () => {
  
  const locations = [
    {
      id: 1,
      name: "Manali",
      country: "India",
      memories: {
        photos: 223,
        coffeeShops: 9,
        sunrises: 7,
        landmarks: 11
      }
    },
    {
      id: 2,
      name: "Hawaii",
      country: "USA",
      memories: {
        photos: 234,
        coffeeShops: 3,
        sunrises: 10,
        landmarks: 6
      }
    },
    {
        id: 2,
        name: "Paris",
        country: "France",
        memories: {
          photos: 323,
          coffeeShops: 8,
          sunrises: 4,
          landmarks: 7
        }
      },
      {
        id: 2,
        name: "Iceland",
        country: "Iceland",
        memories: {
          photos: 78,
          coffeeShops: 1,
          sunrises: 1,
          landmarks: 6
        }
      },
      {
        id: 2,
        name: "Zurich",
        country: "Switzerland",
        memories: {
          photos: 278,
          coffeeShops: 6,
          sunrises: 5,
          landmarks: 9
        }
      },
      {
        id: 2,
        name: "Bali",
        country: "Indonesia",
        memories: {
          photos: 69,
          coffeeShops: 1,
          sunrises: 3,
          landmarks: 8
        }
      }
  ];

  // Calculate travel stats
  const totalPhotos = locations.reduce((sum, loc) => sum + loc.memories.photos, 0);
  const totalCoffeeShops = locations.reduce((sum, loc) => sum + loc.memories.coffeeShops, 0);
  const totalSunrises = locations.reduce((sum, loc) => sum + loc.memories.sunrises, 0);
  const totalLandmarks = locations.reduce((sum, loc) => sum + loc.memories.landmarks, 0);

  const StatBadge = ({ icon: Icon, count, label }) => (
    <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
      <Icon className="w-4 h-4 text-blue-500" />
      <span className="font-medium">{count}</span>
      <span className="text-gray-600 text-sm">{label}</span>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header with animated counter */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">
          Travel Memories
        </h1>
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
          <Globe className="w-5 h-5 text-blue-500 animate-pulse" />
          <span className="font-semibold text-blue-700">
            {locations.length} {locations.length === 1 ? 'Destination' : 'Destinations'} Explored
          </span>
        </div>

        {/* Travel Stats Timeline */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Travel Story in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatBadge icon={Camera} count={totalPhotos} label="Photos" />
            <StatBadge icon={Coffee} count={totalCoffeeShops} label="Cafés" />
            <StatBadge icon={Sunrise} count={totalSunrises} label="Sunrises" />
            <StatBadge icon={Mountain} count={totalLandmarks} label="Landmarks" />
          </div>
        </div>
      </div>
      </div>
  );
};

export default VisitedLocations;