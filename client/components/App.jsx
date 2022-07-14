import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddMessage from './AddMessage'
import CreateCard from "./CreateCard";

function App() {
  return (
    <>
      <header className="header">
        <h1>Warm Fuzzies</h1>
      </header>
      <section className="main">
        
        <Routes>
          <Route path='/' element={<CreateCard />} />
          <Route path='/card/:id/add' element={<AddMessage />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
