import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserCart from './pages/UserCart'
import UserProfile from './pages/UserProfile'
import Nav from './components/Nav'



const App = () => {
  return (
    <>
    <BrowserRouter>
     <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cart' element={<UserCart />}/>
      <Route path='/my-profile' element={<UserProfile />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App