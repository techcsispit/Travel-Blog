import React from 'react'
import { Link } from 'react-router-dom'
const DestCard = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 px-[10rem] py-[4rem]">
      <Card
      image="src/assets/m-1.jpeg"
      title="MANALI"
      />
      <Card
      image="src/assets/b-1.jpg"
      title="BALI"
      />
      <Card
      image="src/assets/p-1.jpg"
      title="PARIS"
      />
      <Card
      image="src/assets/i-1.jpg"
      title="ICELAND"
      />
      <Card 
      image="src/assets/z-1.jpg"
      title="ZURICH"
      />
      <Card
      image="src/assets/h-1.jpg"
      title="HAWAII"
      />
    </div>
  )
}

function Card({image,title}) {
  return(
    <div className="overflow-hidden shadow-lg border-gray-200 border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className='p-4 h-[22rem] pb-11 relative'>
            <Link to={`/blog/${title}`}>
            <img src={image} className='h-full cursor-pointer'></img>
            </Link>
            <div className='px-[4rem] w-[350px] absolute inset-0 top-[289px] right-5 left-3'>
            <div className='flex justify-center items-center bg-brown pt-2 pb-2'>
                {title}
            </div>
            </div>
        </div>
      </div>
  )
}

export default DestCard;
