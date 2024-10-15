import React from 'react'
import { Link } from 'react-router-dom'


export default function BlogCard() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Travel Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                image="src/assets/e-1.jpg"
                title="Affordable places in Europe"
                desc="Europe's hidden gems: Big experiences, small prices."
                date="April 12, 2024"
              />
              <Card
                image="src/assets/s-1.jpg"
                title="Exploring street food of India"
                desc="Embark on a culinary journey through the vibrant street markets of Southeast Asia."
                date="June 28, 2024"
              />
              <Card
                image="src/assets/t-1.avif"
                title="Craft Your Perfect Journey"
                desc="Learn how to make a travel plan."
                date="September 15, 2024"
              />
            </div>
          </div>
        </section>
    </div>
  )
}

function Card({ image, title, desc, date }) {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={title} className="w-[30rem] h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{desc}</p>
  <div className="mt-4 flex items-center justify-between  text-sm text-gray-700">
         <div className=' flex items-center justify-between'> 
          <span>{date}</span>
          </div>
                  {/* Link to detailed blog page */}
        <Link to={`/travel/${title}`} className="text-blue-500 mt-4 inline-block">
          Read More
        </Link>
        </div>


        </div>
      </div>
    )
  }
