import React from 'react'
import HomeCards from '../components/HomeCards'

const Home = () => {
  return (
    <>
    <header className='bg-blue-300 h-100 flex justify-center items-center  font-bold '>
      <h1 className='text-3xl'>WelCome To E-Kart</h1>
    </header>
    <div className=' flex-row grid grid-cols-4 items-center justify-center'>
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />
   <HomeCards />

    </div>
    </>
  )
}

export default Home