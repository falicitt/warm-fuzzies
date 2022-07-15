import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import AddMessage from './AddMessage'
import CreateCard from './CreateCard'
import DisplayCard from './DisplayCard'

function App() {
 
  return (
    <>
      <header className='header'>
        <h1>Warm Fuzzies</h1>
      </header>
      <section className='main'>
        <Routes>
          <Route path='/' element={<CreateCard />} />
          <Route path='/card/:id/add' element={<AddMessage />} />
          <Route path='/card/:id' element={<DisplayCard />} />
        </Routes>
      </section>
    </>
  )
}

export default App
