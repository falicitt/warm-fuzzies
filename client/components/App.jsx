import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddMessage from './AddMessage'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path='/card/:id/add' element={<AddMessage />} />
        </Routes>
      </section>
    </>
  )
}

export default App
