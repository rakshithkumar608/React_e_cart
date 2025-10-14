import React from 'react'
import logo from "../assets/react.svg"

const HomeCards = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-10 '>
      <img 
      src={logo}
      className='w-full' 
      alt='thumbnails'/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title of the Product
          <p className='text-gray-700 text-base'>
          Description of the products
          </p>
        </div>
      
      <div className="bg-blue-600 text-center h-10 text-lg font-bold flex justify-center hover:bg-blue-500 rounded-md">
        <button className='cursor-pointer '>Add To Cart</button>
      </div>
      </div>
    </div>
  )
}

export default HomeCards