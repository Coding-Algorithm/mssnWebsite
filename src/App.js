import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './app.css'
import Home from './pages/Home/Home'
import Session from './pages/Session/Session'
import Lecture from './pages/Lecture/Lecture'
import About from './pages/About/About'
import News from './pages/News/News'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/session' element={<Session />} />
          <Route path='/lectures' element={<Lecture />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App