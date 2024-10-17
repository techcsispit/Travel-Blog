import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel' // added carousel library for adding carausels
import 'react-responsive-carousel/lib/styles/carousel.min.css'


export default function BlogDetails() {
  const { title } = useParams()
//created blog data for conveiniency
  const blogData = {
    "Zurich, Switzerland": {
      images: [
        "../src/assets/z-1.avif",
        "../src/assets/z-1.jpg",
        "../src/assets/z-3.avif"
      ],
      description: "Zurich is the largest city in Switzerland, offering the perfect blend of urban life and scenic Alpine views.",
      thingsToDo: [
        `Take a boat ride on Lake Zurich and enjoy the breathtaking views of the Alps.
        Hike up Uetliberg Mountain for a panoramic view of the city and surrounding landscapes.`,
        `Stroll through the picturesque Old Town (Altstadt) and explore medieval streets and hidden gems.
        Take a day trip to the Rhine Falls, Europe’s largest waterfall, just an hour away from Zurich.`,
        `Visit the Swiss National Museum to dive into Switzerland's rich cultural history. 
        Shop along Bahnhofstrasse, one of the world’s most exclusive shopping avenues.`,
        "Discover contemporary art at the Kunsthaus Zurich, featuring works by renowned artists.",
      ],
      travelTips: [
        `Zurich has an excellent public transportation system with trams and buses that can take you anywhere.
        Wear comfortable shoes – Zurich's Old Town has many cobbled streets and walking paths.`,
        "Make sure to try Swiss chocolate, fondue, and raclette for an authentic culinary experience.",
        `Most places accept Euros, but the official currency is the Swiss Franc. Consider having some local cash on hand.
        Tipping in Zurich is appreciated but not expected. Most service charges are included in bills.`,
        `Switzerland is known for punctuality. Trains and buses are extremely reliable and timely.
        Many museums in Zurich offer free or discounted entry on specific days of the month.`,
      ],
      ourExperience: `Our time in Zurich was nothing short of spectacular. We began by walking through the historic streets of Old Town, 
      where we were captivated by the stunning medieval architecture and charming boutiques. The view from Uetliberg Mountain took our 
      breath away — the sight of Zurich nestled below, with the Alps standing proudly in the distance, felt like a dream. 
  
      We spent a leisurely afternoon on Lake Zurich, cruising along the crystal-clear water while soaking in the incredible views of the 
      city’s skyline and distant mountains. We also couldn’t resist indulging in Zurich’s famous chocolate shops — the delicate and 
      rich flavors were unlike anything we’ve tasted before.
  
      One of the highlights of our trip was a spontaneous visit to the Swiss National Museum, where we learned so much about Switzerland’s 
      fascinating history. To top it off, we enjoyed a delicious fondue dinner in a cozy restaurant, sharing stories with locals who 
      welcomed us with warmth and hospitality. Zurich has truly left an imprint on our hearts, and we can’t wait to return one day!`,
      location: "Zurich, Switzerland"
    },
  
    "Paris, France": {
      images: [
        "../src/assets/p-1.jpg",
        "../src/assets/p-3.avif",
        "../src/assets/p-2.avif"
      ],
      description: "Paris, the capital city of France, is known for its rich history, iconic landmarks, art, and cuisine. The 'City of Light' is a cultural and romantic hub.",
      thingsToDo: [
        "Visit the Eiffel Tower and enjoy panoramic views of Paris from its top.",
        "Explore the art and history at the Louvre Museum, home to the Mona Lisa and many other famous works.",
        "Take a walk down the Champs-Élysées and shop at its luxury boutiques.",
        "Discover the beauty of Notre-Dame Cathedral, a masterpiece of French Gothic architecture.",
        "Enjoy a boat cruise on the Seine River and see Paris from a unique perspective."
      ],
      travelTips: [
        "Paris is best explored by foot, so wear comfortable shoes for long walks.",
        "Try traditional French pastries like croissants, macarons, and pain au chocolat from local bakeries.",
        "The Paris metro system is extensive and easy to use; purchase a multi-day pass if you plan to use it often.",
        "Visit major attractions early in the morning or late in the evening to avoid crowds.",
        "Paris is a diverse city – venture beyond the main attractions to discover hidden neighborhoods and local culture."
      ],
      ourExperience: `Paris was an enchanting experience from start to finish. We began our journey with a visit to the iconic Eiffel Tower, 
      and the view from the top was simply breathtaking. As we looked out over the city, the Seine River sparkled below, and the beauty of 
      Paris unfolded before us. Every corner of the city is filled with art and history, especially at the Louvre, where we spent hours 
      admiring masterpieces from different eras.
  
      Walking through the narrow, cobblestone streets of Montmartre felt like stepping into a Parisian dream, with artists painting in 
      the open air and cafés bustling with life. In the evenings, we indulged in some of the finest French cuisine, from escargot to 
      delicate pastries. Our cruise along the Seine at sunset was the perfect way to end our trip — Paris truly is a city that leaves a 
      lasting impression with its charm, romance, and timeless beauty.`,
      location: "Paris, France"
    },
  
    "Hawaii, USA": {
      images: [
        "../src/assets/h-1.jpg",
        "../src/assets/h-2.avif",
        "../src/assets/h-3.avif"
      ],
      description: "Hawaii, an archipelago in the Pacific Ocean, is famous for its stunning beaches, lush landscapes, and unique blend of cultures. It’s a paradise for nature lovers and adventurers alike.",
      thingsToDo: [
        "Relax on the pristine beaches of Waikiki and experience the famous Hawaiian surf.",
        "Hike to the top of Diamond Head for a panoramic view of Oahu’s coastline.",
        "Snorkel at Hanauma Bay and discover a vibrant underwater world of coral reefs and marine life.",
        "Take a scenic drive along the Road to Hana in Maui, with its breathtaking waterfalls and lush rainforests.",
        "Visit Hawaii Volcanoes National Park to witness active volcanoes and the creation of new land."
      ],
      travelTips: [
        "Hawaii is warm year-round, but bring a light jacket for cooler evenings, especially in higher elevations.",
        "Be respectful of local customs and traditions, especially when visiting sacred sites or participating in cultural activities.",
        "Renting a car is the best way to explore the islands at your own pace.",
        "Stay hydrated and wear sunscreen, as the tropical sun can be intense.",
        "Be mindful of the ocean currents and only swim in designated safe areas."
      ],
      ourExperience: `Hawaii was like a dream come true. From the moment we stepped off the plane, we were surrounded by the vibrant colors of 
      tropical flowers and the warm aloha spirit. Our days were filled with adventure, starting with hikes up the iconic Diamond Head and 
      ending with relaxing evenings watching the sunset over the Pacific Ocean. 
  
      We spent hours snorkeling at Hanauma Bay, where the underwater world came alive with vibrant coral reefs and schools of colorful 
      fish. One of the most memorable moments of our trip was witnessing the power of nature at Hawaii Volcanoes National Park. Watching 
      molten lava flow into the ocean was a humbling reminder of the incredible forces that shape our planet. 
  
      The Hawaiian culture added a special touch to our trip. We learned about the deep respect the locals have for the land, and we were 
      honored to participate in a traditional luau where we enjoyed delicious Hawaiian dishes and watched hula performances. Hawaii is a 
      place like no other — a true paradise that stole our hearts, and we’re already planning our next visit.`,
      location: "Hawaii, USA"
    }
  };
  

  const blog = blogData[title]

  if (!blog) {
    return <h2 className="text-center text-2xl mt-12">Destination not found</h2>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>

      {/* Full-width Carousel */}
      <Carousel showThumbs={false} autoPlay infiniteLoop className="mb-12">
        {blog.images.map((image, idx) => (
          <div key={idx}>
            <img src={image} alt={`Slide ${idx}`} className="w-full h-[40rem] object-cover" />
          </div>
        ))}
      </Carousel>

      {/* Overview Section */}
      <section className="mb-12 fade-in">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>
      </section>

      {/* Things to Do Section */}
      <section className="mb-12 fade-in">
        <h2 className="text-2xl font-semibold mb-4">Things to Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blog.thingsToDo.map((activity, idx) => (
            <div
              key={idx}
              className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">Activity {idx + 1}</h3>
              <p className="text-gray-700">{activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="mb-12 fade-in">
        <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
        <div className="flex flex-col space-y-4">
          {blog.travelTips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">Tip {idx + 1}</h3>
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="mb-12 p-6 rounded-lg bg-purple-100 shadow-lg fade-in">
        <h2 className="text-2xl font-semibold mb-4">Our Experience</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{blog.ourExperience}</p>
      </section>
    </div>
  )
}
