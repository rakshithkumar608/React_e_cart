import p from '../assets/p.jpg'
import ReactLogo from "../assets/react.svg"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-gray-800'>
   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button 
        type='button' 
        command="--toggle" commandfor="mobile-menu" 
        className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'>
        <span className='absolute -inset-0.5'></span>
        <span className='sr-only'>Open main menu</span>
         <svg viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img src={ReactLogo} alt="Your Company" className="h-8 w-auto" />
        </div>

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link 
            to={'/home'} 
            href="#" 
            aria-current="page" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'>Home</Link>
             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
            <Link 
            to={'/cart'} 
            href="#" 
            aria-current="page" className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'>Cart</Link>
          </div>
        </div>
      </div>

      <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
        <button 
        className="text-white hover:cursor-pointer hover:bg-gray-400 rounded-md p-1">Log-Out</button>

        <Link to={'/my-profile'} className='hover:cursor-pointer ml-1'>
        <img src={p} alt='profile logo' className='rounded-full w-10 h-10 gap-2'/>
        </Link>
      </div>
    </div>
   </div>
    </nav>
  )
}

export default Nav