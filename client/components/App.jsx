import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayCard from './DisplayCard'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path='/card/:id/' element={<DisplayCard/>} ></Route>
        </Routes>
      </section>
    </>
  )
}

export default App
