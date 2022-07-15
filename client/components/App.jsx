import React from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import AddMessage from './AddMessage'
import CreateCard from "./CreateCard";
import DisplayCard from './DisplayCard'

function App() {
const cards = useSelector((state) => state.cards)

const id = cards.id

  return (
    <>
      <header className="header">
        <h1>Warm Fuzzies</h1>
      </header>
      <section className="main">
        
        <Routes>
          <Route path='/card/:id/' element={<DisplayCard/>} ></Route>
          <Route path='/' element={<CreateCard />} />
          <Route path={`/card/:id/add`} element={<AddMessage />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
