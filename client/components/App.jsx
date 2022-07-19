import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddMessage from './AddMessage'
import CreateCard from './CreateCard'
import DisplayCard from './DisplayCard'

function App() {

  return (
    <>
      {/* <header className='header'>
        <h1>Warm Fuzzies in APP</h1>
      </header> */}

      <section className='main'>
        <Routes>
          <Route path='/card/:cardUrl/' element={<DisplayCard/>} ></Route>
          <Route path='/' element={<CreateCard />} />
          <Route path='/card/:cardUrl/add/' element={<AddMessage />} />
          <Route path='/card/:cardUrl' element={<DisplayCard />} />
        </Routes>
      </section>

    </>
  )
}

export default App
