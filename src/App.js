import React from 'react'
import Home from './components/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutus from './components/aboutus/Aboutus'
import Services from './components/services/Services'
import Contactus from './components/contactus/Contactus'
import News from './components/news/News'

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='news' element={<News/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

