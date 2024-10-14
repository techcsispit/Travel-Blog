import React from 'react'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Featured() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-2 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedCard
                image="src/assets/z-1.jpg"
                title="Zurich, Switzerland"
                description="Lakeside charm, Alpine views in Swiss paradise."
              />
              <FeaturedCard
                image="src/assets/h-1.jpg"
                title="Hawaii, USA"
                description="Relax on pristine beaches and explore lush landscapes."
              />
              <FeaturedCard
                image="src/assets/p-1.jpg"
                title="Paris, France"
                description="Experience the city of love and its iconic landmarks."
              />
            </div>
          </div>
        </section> 
  )
}

function FeaturedCard({ image, title, description }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg ">
      <img src={image} alt={title} className="w-[30rem] h-40" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 ">{description}</p>
        {/* properly added readm more to the right corner of the div for better ui */}
        <div className="mt-4 flex items-center justify-between  text-sm text-gray-700">
         <div className=' flex items-center justify-between'> 
          <MapPin className="h-4 w-4 mr-1" />
          <span>Popular destination</span>
          </div>
                  {/* Link to detailed blog page */}
        <Link to={`/blog/${title}`} className="text-blue-500 mt-4 inline-block">
          Read More
        </Link>
        </div>

      </div>
    </div>
  )
}
